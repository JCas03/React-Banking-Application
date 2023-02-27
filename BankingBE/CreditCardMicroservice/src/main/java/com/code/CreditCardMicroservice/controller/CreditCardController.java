package com.code.CreditCardMicroservice.controller;

import com.code.CreditCardMicroservice.CreditCardMicroserviceApplication;
import com.code.CreditCardMicroservice.model.CreditCard;
import com.code.CreditCardMicroservice.service.CreditCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CreditCardController {

    @Autowired
    private CreditCardService creditCardService;

    @GetMapping("/cards/{username}")
    public List<CreditCard> getAllCardByUsername(@PathVariable("username") String username) {
        return creditCardService.getAllCards(username);
    }

    @PostMapping("/new-card")
    public ResponseEntity<String> save(@RequestBody CreditCard creditCard) {
        return creditCardService.save(creditCard);
    }

    @GetMapping("/card-info/{cardNumber}")
    public ResponseEntity<String> viewCardBalanceAndLimit(@PathVariable("cardNumber") Long cardNumber) {
        return creditCardService.viewCardBalanceAndLimit(cardNumber);
    }
}
