import axios from "axios";

class TransactionService {

    deposit(accountNumber, transaction) {
        return axios.post(`http://localhost:8080/accms/deposit/${accountNumber}`, transaction);
    }

    withdrawal(accountNumber, transaction) {
        return axios.post(`http://localhost:8080/accms/withdrawal/${accountNumber}`, transaction);
    }

    transferFunds(fromAccountNumber, toAccountNumber, transaction) {
        return axios.post(`http://localhost:8080/accms/transfer/${fromAccountNumber}/${toAccountNumber}`, transaction, {
            headers: {
                "Content-Type": "application/json",
                'Accept': 'application/json'
              },
        });
    }

    viewAllTransactionByAccountNumber(accountNumber, transaction) {
        return axios.get(`http://localhost:8080/accms/view-transactions/${accountNumber}`, transaction);
    }
}