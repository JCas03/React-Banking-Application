package com.code.AccountMicroservice.controller;

import com.code.AccountMicroservice.model.Account;
import com.code.AccountMicroservice.model.Transaction;
import com.code.AccountMicroservice.service.AccountService;
import com.code.AccountMicroservice.service.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class TransactionController {

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/deposit/{accountNumber}")
    public ResponseEntity<String> deposit(@PathVariable("accountNumber") String accountNumber,
                                          @RequestBody Transaction transaction){
        return transactionService.deposit(accountNumber, transaction);
    }

    @PostMapping("/withdrawal/{accountNumber}")
    public ResponseEntity<String> withdrawal(@PathVariable("accountNumber") String accountNumber,
                                             @RequestBody Transaction transaction) {
        return transactionService.withdrawal(accountNumber, transaction);
    }

    @PostMapping("/transfer/{fromAccountNumber}/{toAccountNumber}")
    public ResponseEntity<String> transferFunds(@PathVariable("fromAccountNumber") String fromAccountNumber,
                                                @PathVariable("toAccountNumber") String toAccountNumber,
                                                @RequestBody Transaction transaction) {
        return transactionService.transferFunds(fromAccountNumber, toAccountNumber, transaction);
    }

    @GetMapping("/view-transactions/{accountNumber}")
    public List<Transaction> viewAllTransactions(@PathVariable("accountNumber") String accountNumber) {
        return transactionService.viewAllTransactions(accountNumber);
    }
}
