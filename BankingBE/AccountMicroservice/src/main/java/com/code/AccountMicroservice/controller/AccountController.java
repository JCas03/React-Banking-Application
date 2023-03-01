package com.code.AccountMicroservice.controller;

import com.code.AccountMicroservice.model.Account;
import com.code.AccountMicroservice.service.AccountService;
import com.code.AccountMicroservice.service.RabbitMQSender;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
@Api(value = "Account Rest Controller", tags = "REST API for Account")
public class AccountController {

    @Autowired
    private AccountService accountService;


    @GetMapping("/accounts")
    @ApiOperation(value = "Get All Accounts ", response = Iterable.class, tags = "getAllAccounts")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @PostMapping("/new-account")
    @ApiOperation(value = "Create New Account ", tags = "CreateNewAccount")
    public ResponseEntity<String> save(@RequestBody Account account) {
        return accountService.save(account);
    }

    @GetMapping("/account/{accountNumber}")
    @ApiOperation(value = "Get Account by Account Number ", tags = "GetAccountByAccountNumber")
    public Account getAccountByAccountNumber(@PathVariable("accountNumber") String accountNumber) {
        return accountService.findByAccountNumber(accountNumber);
    }
}
