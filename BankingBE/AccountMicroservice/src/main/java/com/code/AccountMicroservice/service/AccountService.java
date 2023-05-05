package com.code.AccountMicroservice.service;

import com.code.AccountMicroservice.model.Account;
import com.code.AccountMicroservice.repository.AccountRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class AccountService {
    @Autowired
    private AccountRepository accountRepository;

    public Optional<Account> getUserById(String id) {
        return accountRepository.findById(id);
    }

    public ResponseEntity<String> save(Account account) {
        account.setAvailableBalance(0.0);
        account.setBalanceDate(LocalDateTime.now());
        accountRepository.save(account);
        return new ResponseEntity<String>("Account Type: " + account.getAccountType() + "\nAccount Name: " +
                account.getAccountName() + "\nAccount Number: " + account.getAccountNumber() +
                " has been created. ", HttpStatus.CREATED);
    }

    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    public Account findByAccountNumber (String accountNumber) {
        Account account = accountRepository.findByAccountNumber(accountNumber);
        return account;
    }

    public List<Account> findAllAccountsByAccountNumber(String accountNumber) {
        return accountRepository.findAllAccountsByAccountNumber(accountNumber);
    }

    public List<Account> findAllAccountsByUsername(String userName) {
        return accountRepository.findAllAccountsByUsername(userName);
    }

    public Account findByAccountId (String id) {
        Account account = accountRepository.findAccountByAccountId(id);
        return account;
    }

    /*public ResponseEntity<String> depositSuccess(String accountNumber, Double depositAmount) {
        Account _account = accountRepository.findByAccountNumber(accountNumber);

    }*/
}
