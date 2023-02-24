package com.code.CreditCardMicroservice.controller;

import com.code.CreditCardMicroservice.model.CardTransaction;
import com.code.CreditCardMicroservice.service.CardTransactionService;
import com.code.CreditCardMicroservice.service.CreditCardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CardTransactionController {

    @Autowired
    private CardTransactionService cardTransactionService;

    @Autowired
    private CreditCardService creditCardService;

    @PostMapping("/card-transaction/{cardNumber}")
    public ResponseEntity<String> transaction(@PathVariable("cardNumber") Long cardNumber,
                                              @RequestBody CardTransaction cardTransaction) {
        return cardTransactionService.transaction(cardNumber, cardTransaction);
    }

    @GetMapping("/view-card-transaction/{cardNumber}")
    public List<CardTransaction> viewAllCardTransactions(@PathVariable("cardNumber") Long cardNumber) {
        return cardTransactionService.viewAllCardTransactions(cardNumber);
    }
}
