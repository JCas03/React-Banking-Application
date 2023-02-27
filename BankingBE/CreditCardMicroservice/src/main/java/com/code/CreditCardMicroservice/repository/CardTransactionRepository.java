package com.code.CreditCardMicroservice.repository;

import com.code.CreditCardMicroservice.model.CardTransaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardTransactionRepository extends MongoRepository<CardTransaction, Long> {
    List<CardTransaction> findByCardNumber(Long cardNumber);
}
