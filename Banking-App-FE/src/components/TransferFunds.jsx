import React, {useState} from "react";
import './css/TransferFunds.css';
import AccountService from "../services/AccountService";

export default function TransferFunds() {

  const [outgoingAccountNumber, setOutgoingAccountNumber] = useState("");
  const [incomingAccountNumber, setIncomingAccountNumber] = useState();
  const [transferAmount, setTransferAmount] = useState("");
  const [transactionDateTime, setTransactionDateTime] = useState("");
  const handleTransfer = (event) => {
    event.preventDefault();
    AccountService.transferFunds(outgoingAccountNumber, incomingAccountNumber, transferAmount)
    console.log("The Following Transaction Has Been Made: Account Number: " + outgoingAccountNumber +
     " To Account Number: "+incomingAccountNumber+" Ammount: " + transferAmount);
  };

  const [isConfirmationModalOpen, setIsConfirmationModalOpen] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setTransferDetails((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleConfirmationModalOpen = () => {
    setIsConfirmationModalOpen(true);
  };

  const handleConfirmationModalClose = () => {
    setIsConfirmationModalOpen(false);
  };

  const handleTransferSubmit = (event) => {
    event.preventDefault();
    let transaction = {
      outgoingAccountNumber: outgoingAccountNumber,
      incomingAccountNumber: incomingAccountNumber,
      transferAmount: transferAmount,
      transactionDateTime: transactionDateTime
    };
    AccountService.transferFunds(outgoingAccountNumber,incomingAccountNumber,JSON.stringify(transaction));
    handleConfirmationModalOpen();
  };

  const isFormValid = transferDetails.amount !== '' && transferDetails.recipientAccountNumber !== '' && transferDetails.recipientAccountName !== '';
  
  const handleTransferAmmountChange = (event) =>{
    setTransferAmount(event.target.value)
  }
  const handleOutgoingAccountNumberChange = (event) =>{
    setOutgoingAccountNumber(event.target.value)
  }
  const handleIncomingAccountNumberChange = (event) =>{
    setIncomingAccountNumber(event.target.value)
  }

  return (
    <div>
      <h1 className="title">Transfer Funds</h1>
      <form onSubmit={handleTransferSubmit} className="transfer-form">
        <div className="form-group">
          <label htmlFor="transferAmount">Amount:</label>
          <input
            type="number"
            id="transferAmount"
            name="transferAmount"
            value={transferAmount}
            onChange={handleTransferAmmountChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="incomingAccountNumber">Incoming Account Number:</label>
          <input
            type="text"
            id="incomingAccountNumber"
            name="incomingAccountNumber"
            value={incomingAccountNumber}
            onChange={handleIncomingAccountNumberChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="outgoingAccountNumber">Outgoing Account Number:</label>
          <input
            type="text"
            id="outgoingAccountNumber"
            name="outgoingAccountNumber"
            value={outgoingAccountNumber}
            onChange={handleOutgoingAccountNumberChange}
            required
          />
        </div>

        <button type="submit" disabled={!isFormValid}>Transfer</button>
      </form>

      {isConfirmationModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Transfer Details</h2>
            <p>Amount: {transferAmount}</p>
            <p>Outgoing Account Number: {outgoingAccountNumber}</p>
            <p>Incoming Account Number: {incomingAccountNumber}</p>
            <div className="modal-buttons">
              <button onClick={handleConfirmationModalClose}>Cancel</button>
              <button onClick={handleTransfer}>Confirm Transfer</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};