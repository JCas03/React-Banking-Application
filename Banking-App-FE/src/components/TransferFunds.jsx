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
    AccountService.transferFunds(/*AccountNumber, ToAccountNumber, Transaction*/)
    // console.log("The Following Transaction Has Been Made: Account Number: " + AccountNumber +
    //  " To Account Number: "+ToAccountNumber+" Ammount: " + Transaction);
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
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
            onChange={handleInputChange}
            required
          />
        </div>

        <button type="submit" disabled={!isFormValid}>Transfer</button>
      </form>

      {isConfirmationModalOpen && (
        <div className="modal">
          <div className="modal-content">
            <h2>Confirm Transfer Details</h2>
            <p>Amount: {transferDetails.amount}</p>
            <p>Recipient's Account Number: {transferDetails.recipientAccountNumber}</p>
            <p>Recipient's Account Name: {transferDetails.recipientAccountName}</p>
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