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
      .then((data) => { setAccData(data); setAccNum(data[0].accountNumber); });
  }, [uName]);

  useEffect(() => {
    if (accNum) {
      AccountService.getAllAccountsByAccountNumber(accNum).then((res) => {
        setAccData(res);
        setBalance(res.balance);
      });
    }
  }, [accNum]);

  const deposit = () => {
    setBalance(balance + amount);
    setAmount(0);
  };

  const withdraw = () => {
    setBalance(balance - amount);
    setAmount(0);
  };

  const handleAccountChange = (event) => {
    setAccId(event.target.value);
    console.log(accId);
  };

  return (
    <div>
      <h1>Banking Application</h1>
      <p>Balance: {balance}</p>
      <Select
        value={accNum}
        onChange={handleAccountChange}
        className={classes.select}
        defaultValue={""}
      >
        {accData && accData.data?.map((account) => (
          <MenuItem key={account.accountName} value={account.id}>
            {account.accountName} ({account.id})
          </MenuItem>
        ))}
      </Select>
      <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} />
      <button onClick={deposit}>Deposit</button>
      <button onClick={withdraw}>Withdraw</button>
    </div>
  );
};
