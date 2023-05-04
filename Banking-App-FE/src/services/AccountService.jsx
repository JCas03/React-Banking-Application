import axios from "axios";

class AccountService {
  getAllAccounts() {
    return axios.get("http://localhost:8080/accms/accounts");
  }

  createNewAccount(account) {
    return axios.post("http://localhost:8080/accms/new-account", account);
  }

  getAccountByAccountNumber(accountNumber) {
    return axios.get(`http://localhost:8080/accms/account/${accountNumber}`);
  }

  getAllAccountsByAccountNumber(accountNumber) {
    return axios.get(
      `http://localhost:8080/accms/all-accounts/${accountNumber}`
    );
  }
  deposit(accountNumber, transaction) {
    return axios.post(`http://localhost:8080/accms/deposit/${accountNumber}`, {
      depositAmount: transaction,
    });
  }

  withdrawal(accountNumber, transaction) {
    return axios.post(
      `http://localhost:8080/accms/withdrawal/${accountNumber}`,
      { withdrawalAmount: transaction }
    );
  }

  transferFunds(fromAccountNumber, toAccountNumber, transaction) {
    return axios.post(
      `http://localhost:8080/accms/transfer/${fromAccountNumber}/${toAccountNumber}`,{transferAmount: transaction}
    );
  }

  viewAllTransactionsOnAccount(accountNumber) {
    return axios.get(
      `http://localhost:8080/accms/view-transactions/${accountNumber}`
    );
  }

  getAllAccountsByUsername(username) {
    return axios.get(
      `http://localhost:8080/accms/all-accounts-by-username/${username}`
    );
  }
}
export default new AccountService();
