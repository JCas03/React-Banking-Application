package com.code.AccountMicroservice.controller;

import com.code.AccountMicroservice.model.Account;
import com.code.AccountMicroservice.service.AccountService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class AccountController {

    @Autowired
    private AccountService accountService;

    @GetMapping("/accounts")
    public List<Account> getAllAccounts() {
        return accountService.getAllAccounts();
    }

    @PostMapping("/new-account")
    public ResponseEntity<String> save(@RequestBody Account account) {
        return accountService.save(account);
    }
}
