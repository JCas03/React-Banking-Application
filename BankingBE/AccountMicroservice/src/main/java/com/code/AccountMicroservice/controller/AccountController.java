package com.code.AccountMicroservice.controller;

import com.code.AccountMicroservice.model.Account;
import com.code.AccountMicroservice.service.AccountService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/accms")
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

    @GetMapping("/accountById/{accountId}")
    @ApiOperation(value = "Get Account by Account Id ", tags = "GetAccountByAccountId")
    public Account getAccountByAccountId(@PathVariable("accountId") String accountId) {
        return accountService.findByAccountId(accountId);
    }

    @GetMapping("/all-accounts/{accountNumber}")
    @ApiOperation(value = "Get Account by Account Number ", tags = "GetAccountByAccountNumber")
    public List<Account> getAllAccountsByAccountNumber(@PathVariable("accountNumber") String accountNumber) {
        return accountService.findAllAccountsByAccountNumber(accountNumber);
    }

    @GetMapping("/all-accounts-by-username/{username}")
    @ApiOperation(value = "Get Accounts By Username", response = Iterable.class, tags = "GetAccountsByUsername")
    public List<Account> getAllAccountsByUsername(@PathVariable("username") String username) {
        return accountService.findAllAccountsByUsername(username);
    }
}
