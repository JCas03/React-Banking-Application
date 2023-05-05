package com.code.AccountMicroservice.service;

import com.code.AccountMicroservice.model.Account;
import com.code.AccountMicroservice.model.Transaction;
import com.code.AccountMicroservice.repository.AccountRepository;
import com.code.AccountMicroservice.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository;

    /*public ResponseEntity<String> deposit(String accountNumber, Transaction transaction){
        Account accountData = accountRepository.findByAccountNumber(accountNumber);

        transactionRepository.save(transaction);
        double depositAmt = transaction.getDepositAmount();
        double newBalance = accountData.getAvailableBalance() + depositAmt;
        System.out.println(depositAmt + accountData.getAvailableBalance());
        accountData.setAvailableBalance(newBalance);
        accountRepository.save(accountData);
        return new ResponseEntity<String>("Account Number: "+ accountData.getAccountNumber() +
                "\nDeposit Amount: " + transaction.getDepositAmount(),HttpStatus.OK);
    }*/
    public ResponseEntity<String> deposit(String accountId, Transaction transaction){
        Account accountData = accountRepository.findAccountByAccountId(accountId);

        transactionRepository.save(transaction);
        double depositAmt = transaction.getDepositAmount();
        double newBalance = accountData.getAvailableBalance() + depositAmt;
        System.out.println(depositAmt + accountData.getAvailableBalance());
        accountData.setAvailableBalance(newBalance);
        accountRepository.save(accountData);
        return new ResponseEntity<String>("Account Number: "+ accountData.getAccountNumber() +
                "\nDeposit Amount: " + transaction.getDepositAmount(),HttpStatus.OK);
    }

    public ResponseEntity<String> withdrawal(String accountId, Transaction transaction){
        Account accountData = accountRepository.findAccountByAccountId(accountId);
        transaction.setTransactionDateTime(LocalDateTime.now());

        transactionRepository.save(transaction);
        double withdrawalAmt = transaction.getWithdrawalAmount();
        double newBalance = accountData.getAvailableBalance() - withdrawalAmt;
        accountData.setAvailableBalance(newBalance);

        accountRepository.save(accountData);
        return new ResponseEntity<String>("Account Number: "+ accountData.getAccountNumber() +
                "\nWithdrawal Amount: " + transaction.getWithdrawalAmount()
                + "\nDate: " + transaction.getTransactionDateTime(),HttpStatus.OK);
    }

    public ResponseEntity<String> transferFunds(String fromAccountNumber, String toAccountNumber, Transaction transaction){
        Account fromAccountData = accountRepository.findByAccountNumber(fromAccountNumber);
        Account toAccountData = accountRepository.findByAccountNumber(toAccountNumber);
        transaction.setTransactionDateTime(LocalDateTime.now());

        transactionRepository.save(transaction);
        double transferAmount = transaction.getTransferAmount();
        double fromNewBalance = fromAccountData.getAvailableBalance() - transferAmount;
        double toNewBalance = toAccountData.getAvailableBalance() + transferAmount;
        fromAccountData.setAvailableBalance(fromNewBalance);
        toAccountData.setAvailableBalance(toNewBalance);

        accountRepository.save(fromAccountData);
        accountRepository.save(toAccountData);
        return new ResponseEntity<String>("From Account Number: " + fromAccountData.getAccountNumber()
                + "\nTo Account Number: " + toAccountData.getAccountNumber()
                + "\nTransfer Amount: " + transaction.getTransferAmount(),HttpStatus.OK);
    }

    public ResponseEntity<String> transferFundsByAccountId(String fromAccountId, String toAccountId, Transaction transaction){
        Account fromAccountData = accountRepository.findAccountByAccountId(fromAccountId);
        Account toAccountData = accountRepository.findAccountByAccountId(toAccountId);
        transaction.setTransactionDateTime(LocalDateTime.now());

        transactionRepository.save(transaction);
        double transferAmount = transaction.getTransferAmount();
        double fromNewBalance = fromAccountData.getAvailableBalance() - transferAmount;
        double toNewBalance = toAccountData.getAvailableBalance() + transferAmount;
        fromAccountData.setAvailableBalance(fromNewBalance);
        toAccountData.setAvailableBalance(toNewBalance);

        accountRepository.save(fromAccountData);
        accountRepository.save(toAccountData);
        return new ResponseEntity<String>("From Account Number: " + fromAccountData.getAccountNumber()
                + "\nTo Account Number: " + toAccountData.getAccountNumber()
                + "\nFrom Account Id: " + toAccountData.getAccountId()
                + "\nTo Account Id: " + toAccountData.getAccountId()
                + "\nTransfer Amount: " + transaction.getTransferAmount(),HttpStatus.OK);
    }

    public List<Transaction> viewAllTransactions(String accountNumber) {
        return transactionRepository.findByAccountNumber(accountNumber);
    }

    public List<Transaction> viewTransactionsByAccountId(String accountId) {
        return transactionRepository.findByAccountId(accountId);
    }
}