package com.code.CreditCardMicroservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data
public class CardTransaction {

    @Id
    private String transactionId;
    private Long cardNumber;
    private String username;
    private Double transactionAmt;
    private LocalDateTime transactionDateTime;


}
