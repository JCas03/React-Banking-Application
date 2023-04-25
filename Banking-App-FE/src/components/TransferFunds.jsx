import React, {useState} from "react";

export default function CardServices() {

    const [transferDetails, setTransferDetails] = useState({
        amount: '',
        recipientAccountNumber: '',
        recipientAccountName: ''
      });
    
      const handleInputChange = (event) => {
        const { name, value } = event.target;
        setTransferDetails((prevState) => ({
          ...prevState,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // send transfer details to backend server
        // display confirmation page/modal
      };

    return(<form onSubmit={handleSubmit}>
        <label htmlFor="amount">Amount:</label>
        <input
          type="number"
          id="amount"
          name="amount"
          value={transferDetails.amount}
          onChange={handleInputChange}
          required
        />
        <br></br>
        <label htmlFor="recipientAccountNumber">Recipient's Account Number:</label>
        <input
          type="text"
          id="recipientAccountNumber"
          name="recipientAccountNumber"
          value={transferDetails.recipientAccountNumber}
          onChange={handleInputChange}
          required
        />
        <br></br>
        <label htmlFor="recipientAccountName">Recipient's Account Name:</label>
        <input
          type="text"
          id="recipientAccountName"
          name="recipientAccountName"
          value={transferDetails.recipientAccountName}
          onChange={handleInputChange}
          required
        />
        <br></br>
        <button type="submit">Transfer</button>
      </form>);
};