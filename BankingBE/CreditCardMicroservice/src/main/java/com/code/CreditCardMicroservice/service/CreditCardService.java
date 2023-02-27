package com.code.CreditCardMicroservice.service;

import com.code.CreditCardMicroservice.model.CardTransaction;
import com.code.CreditCardMicroservice.model.CreditCard;
import com.code.CreditCardMicroservice.repository.CardTransactionRepository;
import com.code.CreditCardMicroservice.repository.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.Calendar;
import java.util.Date;
import java.util.List;

@Service
public class CreditCardService {

    @Autowired
    private CreditCardRepository creditCardRepository;

    @Autowired
    private CardTransactionRepository cardTransactionRepository;

    public ResponseEntity<String> save(CreditCard creditCard) {
        Long randomCardNumber = (long) (Math.random() * 10000000000000000L);
        creditCard.setCardNumber(randomCardNumber);
        Date created = new Date();
        Calendar c = Calendar.getInstance();
        c.setTime(created);
        c.add(Calendar.YEAR, 5);
        Date expired = c.getTime();
        creditCard.setCardCreated(created);
        creditCard.setCardExpiration(expired);
        creditCardRepository.save(creditCard);
        return new ResponseEntity<String>("Card Number: " + creditCard.getCardNumber()
        + "\nUsername: " + creditCard.getUsername()
        + "\nFirst Name: " + creditCard.getFirstName() + "\nLast Name: " + creditCard.getLastName()
        + " has been created.", HttpStatus.CREATED);
    }

    public List<CreditCard> getAllCards(String userName) {
        return creditCardRepository.findCardsByUsername(userName);
    }

    public CreditCard findCardHolderInfoByCardNumber(Long cardNumber) {
        CreditCard creditCard = creditCardRepository.findCardHolderInfoByCardNumber(cardNumber);
        return creditCard;
    }

    public ResponseEntity<String> viewCardBalanceAndLimit(Long cardNumber) {
        CreditCard cardData = creditCardRepository.findCardHolderInfoByCardNumber(cardNumber);

        return new ResponseEntity<String>("Card Number: " + cardData.getCardNumber()
        + "\nCard Balance: " + cardData.getCreditBalance()
        + "\nRemaining Credit Limit: " + cardData.getCreditLimit(), HttpStatus.OK);
    }
}
