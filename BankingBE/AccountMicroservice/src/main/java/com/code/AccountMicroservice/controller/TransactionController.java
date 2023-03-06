package com.code.AccountMicroservice.controller;

import com.code.AccountMicroservice.model.Transaction;
import com.code.AccountMicroservice.service.AccountService;
import com.code.AccountMicroservice.service.RabbitMQSender;
import com.code.AccountMicroservice.service.TransactionService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accms")
@Api(value = "Transaction Rest Controller", tags = "REST API for Transactions")
public class TransactionController {


    @Autowired
    RabbitMQSender rabbitMQSender;

    @Autowired
    private AccountService accountService;

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/deposit/{accountNumber}")
    @ApiOperation(value = "Deposit", tags = "Deposit")
    public ResponseEntity<String> deposit(@PathVariable("accountNumber") String accountNumber,
                                          @RequestBody Transaction transaction){
        rabbitMQSender.send(transaction);
        return transactionService.deposit(accountNumber, transaction);
    }

    @PostMapping("/withdrawal/{accountNumber}")
    @ApiOperation(value = "withdrawal", tags = "withdrawal")
    public ResponseEntity<String> withdrawal(@PathVariable("accountNumber") String accountNumber,
                                             @RequestBody Transaction transaction) {
        return transactionService.withdrawal(accountNumber, transaction);
    }

    @PostMapping("/transfer/{fromAccountNumber}/{toAccountNumber}")
    @ApiOperation(value = "Transfer", tags = "Transfer")
    public ResponseEntity<String> transferFunds(@PathVariable("fromAccountNumber") String fromAccountNumber,
                                                @PathVariable("toAccountNumber") String toAccountNumber,
                                                @RequestBody Transaction transaction) {
        return transactionService.transferFunds(fromAccountNumber, toAccountNumber, transaction);
    }

    @GetMapping("/view-transactions/{accountNumber}")
    @ApiOperation(value = "View Transactions", tags = "ViewTransactions")
    public List<Transaction> viewAllTransactions(@PathVariable("accountNumber") String accountNumber) {
        return transactionService.viewAllTransactions(accountNumber);
    }
}
