package com.code.CreditCardMicroservice.controller;

import com.code.CreditCardMicroservice.model.CardTransaction;
import com.code.CreditCardMicroservice.service.CardTransactionService;
import com.code.CreditCardMicroservice.service.CreditCardService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/ccms")
@Api(value = "Card Transaction Controller", tags = "REST API for Card Transaction")
public class CardTransactionController {

    @Autowired
    private CardTransactionService cardTransactionService;

    @Autowired
    private CreditCardService creditCardService;

    @PostMapping("/card-transaction/{cardNumber}")
    @ApiOperation(value = "Post Transaction By Card Number ", response = Iterable.class, tags = "Post Transaction")
    public ResponseEntity<String> transaction(@PathVariable("cardNumber") Long cardNumber,
                                              @RequestBody CardTransaction cardTransaction) {
        return cardTransactionService.transaction(cardNumber, cardTransaction);
    }

    @GetMapping("/view-card-transaction/{cardNumber}")
    @ApiOperation(value = "Get Transactions By Card Number ", response = Iterable.class, tags = "getTransactions")
    public List<CardTransaction> viewAllCardTransactions(@PathVariable("cardNumber") Long cardNumber) {
        return cardTransactionService.viewAllCardTransactions(cardNumber);
    }
}
