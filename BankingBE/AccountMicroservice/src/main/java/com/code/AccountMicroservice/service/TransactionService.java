package com.code.AccountMicroservice.service;

import com.code.AccountMicroservice.model.Account;
import com.code.AccountMicroservice.model.Transaction;
import com.code.AccountMicroservice.repository.AccountRepository;
import com.code.AccountMicroservice.repository.TransactionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;

    @Autowired
    private AccountRepository accountRepository;

    public ResponseEntity<String> deposit(String accountNumber, Transaction transaction){
        Account accountData = accountRepository.findByAccountNumber(accountNumber);

        transactionRepository.save(transaction);
        double depositAmt = transaction.getDepositAmount();
        accountData.setAvailableBalance(depositAmt);
        return new ResponseEntity<String>("Account Number: "+ accountData.getAccountNumber() +
                "\nDeposit Amount: " + transaction.getDepositAmount(),HttpStatus.OK);
    }

    /*public ResponseEntity<Transaction> deposit(String accountNumber, Double depositAmount) {
        Account account = accountRepository.findByAccountNumber(accountNumber);

        if(accountNumber.isEmpty()) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
        else if (depositAmount.isNaN() || depositAmount == 0) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
        else {
            double initialBalance = account.getAvailableBalance();
            double newBalance = initialBalance + depositAmount;
            account.setAvailableBalance(newBalance);
            return new ResponseEntity<>(HttpStatus.OK);
        }
    }*/
}
