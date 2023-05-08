import React, { useEffect, useState } from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import { makeStyles } from '@material-ui/core/styles';
import { Select, MenuItem } from '@material-ui/core';
import UserService from '../services/UserService';
import AccountService from '../services/AccountService';

const useStyles = makeStyles((theme) => ({
  select: {
    minWidth: 200,
  },
}));

export default function FundServices() {
  

  const classes = useStyles();
  const [balance, setBalance] = useState(0);
  const [amount, setAmount] = useState(0);
  const [uName, setUName] = useState();
  const [accNum, setAccNum] = useState();
  const [accData, setAccData] = useState([]);
  const [accId, setAccId] = useState();
  const { user } = useAuth0();
  

  useEffect(() => {
    UserService.getUserByEmail(user.email)
      .then((res) => res.data)
      .then((data) => setUName(data.userName));
  }, [user.email]);

  useEffect(() => {
    AccountService.getAllAccountsByUsername(uName)
      .then((res) => res.data)
      .then((data) => { setAccData(data); setAccNum(data[0].accountNumber);});
  }, [uName]);

  useEffect(() => {
    if (accNum) {
      AccountService.getAllAccountsByAccountNumber(accNum).then((res) => {
        setAccData(res);
        console.log(accData);
        setBalance(res.balance);
      });
    }
  }, [accNum]);
  useEffect(() => {
    console.log(accId);
  }, [accId]);
  useEffect(() => {
    console.log(accData);
  }, [accData]);

  const deposit = () => {
    AccountService.deposit(accId, amount, options);
    console.log(accId);
    console.log(amount);
    // setBalance(balance + amount);
    // setAmount(0);
  };

  const withdraw = () => {
    AccountService.withdrawal(accId, amount, options);
    console.log(accId);
    console.log(amount);
    // setBalance(balance - amount);
    // setAmount(0);
  };

  const handleAccountChange = (event) => {
    setAccId(event.target.value);
  };
  const options = {
    headers: { 'Content-Type': 'application/json' }
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h1>Funds Service</h1>
      <p>Balance: {balance}</p>
      <div style={{ marginBottom: "10px" }}>
        <Select
          value={accId}
          onChange={handleAccountChange}
          className={classes.select}
          defaultValue={""}
          style={{ backgroundColor: "#cfd8dc", marginRight: "10px", borderRadius: "5px" }}
          inputProps={{
            style: {
              borderRadius: "5px",
              backgroundColor: "#cfd8dc",
              padding: "10px"
            }
          }}
        >
          {accData.data?.map((account) => (
            <MenuItem key={account.accountName} value={account.accountId} >
              {account.accountName} ({account.accountId})
            </MenuItem>
          ))}
        </Select>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} style={{ marginRight: "10px" }} />
        <button onClick={deposit} style={{ marginRight: "10px", backgroundColor: "#063970", color: "#cfd8dc" }}>Deposit</button>
        <button onClick={withdraw} style={{ backgroundColor: "#063970", color: "#cfd8dc" }}>Withdraw</button>
      </div>
    </div>
  );
  
  
  
};
