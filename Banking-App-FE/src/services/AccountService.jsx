import axios from "axios";

class AccountService {

    getAllAccounts(){
        return axios.get("http://localhost:8080/accms/accounts");
    }

    createNewAccount(account){
        return axios.post("http://localhost:8080/accms/new-account", account);
    }

    getAccountByAccountNumber(accountNumber) {
        return axios.get(`http://localhost:8080/accms/account/${accountNumber}`);
    }

    getAllAccountsByAccountNumber(accountNumber) {
        return axios.get(`http://localhost:8080/accms/all-accounts/${accountNumber}`);
    }

    deposit(accountNumber, transaction) {
        return axios.post(`http://localhost:8080/accms/deposit/${accountNumber}`, transaction);
    }

    withdrawal(accountNumber, transaction) {
        return axios.post(`http://localhost:8080/accms/withdrawal/${accountNumber}`, transaction);
    }

    transferFunds(fromAccountNumber, toAccountNumber, transaction) {
        return axios.post(`http://localhost:8080/accms/transfer/${fromAccountNumber}/${toAccountNumber}`, transaction);
    }

    viewAllTransactionsOnAccount(accountNumber) {
        return axios.get(`http://localhost:8080/accms/view-transactions/${accountNumber}`);
    }
}
export default new AccountService();