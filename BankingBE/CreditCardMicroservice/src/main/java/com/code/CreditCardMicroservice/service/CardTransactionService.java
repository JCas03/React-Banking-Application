package com.code.CreditCardMicroservice.service;

import com.code.CreditCardMicroservice.model.CardTransaction;
import com.code.CreditCardMicroservice.model.CreditCard;
import com.code.CreditCardMicroservice.repository.CardTransactionRepository;
import com.code.CreditCardMicroservice.repository.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;

@Service
public class CardTransactionService {

    @Autowired
    private CardTransactionRepository cardTransactionRepository;

    @Autowired
    private CreditCardRepository creditCardRepository;

    /*
    Save
    Transaction occurs, save transaction Amt and datetime as now,
    then add to creditBalance and subtract from creditLimit
    Return cardNumber, transactionID, transaction amount, card balance, and remaining credit limit

    GetAllTransactionsByCardNumber
    Provide list of all transactions by cardNumber
     */

    public ResponseEntity<String> transaction(Long cardNumber, CardTransaction cardTransaction) {
        CreditCard cardData = creditCardRepository.findCardHolderInfoByCardNumber(cardNumber);

        cardTransaction.setCardNumber(cardNumber);
        cardTransaction.setUsername(cardData.getUsername());
        cardTransaction.setTransactionDateTime(LocalDateTime.now());
        cardTransactionRepository.save(cardTransaction);

        double oldLimitAmount = cardData.getCreditLimit();
        double oldBalance = cardData.getCreditBalance();
        double transactionAmt = cardTransaction.getTransactionAmt();
        cardData.setCreditBalance(oldBalance + transactionAmt);
        cardData.setCreditLimit(oldLimitAmount - transactionAmt);
        creditCardRepository.save(cardData);

        return new ResponseEntity<String>("Card Number: " + cardData.getCardNumber()
        + "\nTransaction ID: " + cardTransaction.getTransactionId()
        + "\nTransaction Amount: " + cardTransaction.getTransactionAmt()
        + "\nCard Balance: " + cardData.getCreditBalance()
        + "\nRemaining Card Limit: " + cardData.getCreditLimit(), HttpStatus.OK);
    }

    public List<CardTransaction> viewAllCardTransactions(Long cardNumber) {
        return cardTransactionRepository.findByCardNumber(cardNumber);
    }
}
