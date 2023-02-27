package com.code.CreditCardMicroservice.repository;

import com.code.CreditCardMicroservice.model.CardTransaction;
import com.code.CreditCardMicroservice.model.CreditCard;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CreditCardRepository extends MongoRepository<CreditCard, String> {
    List<CreditCard> findCardsByUsername(String userName);
    CreditCard findCardHolderInfoByCardNumber(Long cardNumber);
}
