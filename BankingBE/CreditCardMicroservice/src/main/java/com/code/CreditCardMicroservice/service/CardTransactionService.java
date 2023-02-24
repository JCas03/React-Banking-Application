package com.code.CreditCardMicroservice.service;

import com.code.CreditCardMicroservice.model.CardTransaction;
import com.code.CreditCardMicroservice.model.CreditCard;
import com.code.CreditCardMicroservice.repository.CardTranscationRepository;
import com.code.CreditCardMicroservice.repository.CreditCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class CardTransactionService {

    @Autowired
    private CardTranscationRepository cardTranscationRepository;

    @Autowired
    private CreditCardRepository creditCardRepository;

}
