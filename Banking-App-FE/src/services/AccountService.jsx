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
}