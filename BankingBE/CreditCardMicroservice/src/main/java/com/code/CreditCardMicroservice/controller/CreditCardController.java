package com.code.CreditCardMicroservice.controller;

import com.code.CreditCardMicroservice.CreditCardMicroserviceApplication;
import com.code.CreditCardMicroservice.model.CreditCard;
import com.code.CreditCardMicroservice.service.CreditCardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ccms")
@Api(value = "Credit Card Controller", tags = "REST API for Credit Card")
public class CreditCardController {

    @Autowired
    private CreditCardService creditCardService;

    @GetMapping("/cards/{username}")
    @ApiOperation(value = "Get Cards By Username ", response = Iterable.class, tags = "getCardsByUsername")
    public List<CreditCard> getAllCardByUsername(@PathVariable("username") String username) {
        return creditCardService.getAllCards(username);
    }

    @PostMapping("/new-card")
    @ApiOperation(value = "Create New Card ", response = Iterable.class, tags = "CreateCard")
    public ResponseEntity<String> save(@RequestBody CreditCard creditCard) {
        return creditCardService.save(creditCard);
    }

    @GetMapping("/card-info/{cardNumber}")
    @ApiOperation(value = "Get Card Info By Card Number ", response = Iterable.class, tags = "getCardInfo")
    public ResponseEntity<String> viewCardBalanceAndLimit(@PathVariable("cardNumber") Long cardNumber) {
        return creditCardService.viewCardBalanceAndLimit(cardNumber);
    }
}
