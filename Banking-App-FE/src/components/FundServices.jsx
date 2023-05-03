import React, {useState} from 'react';

export default function FundServices() {
    const [balance, setBalance] = useState(0);
    const [amount, setAmount] = useState(0);
  
    const deposit = () => {
      setBalance(balance + amount);
      setAmount(0);
    };
  
    const withdraw = () => {
      setBalance(balance - amount);
      setAmount(0);
    };
  
    return (
      <div>
        <h1>Banking Application</h1>
        <p>Balance: {balance}</p>
        <input type="number" value={amount} onChange={(e) => setAmount(+e.target.value)} />
        <button onClick={deposit}>Deposit</button>
        <button onClick={withdraw}>Withdraw</button>
      </div>
    );
};
