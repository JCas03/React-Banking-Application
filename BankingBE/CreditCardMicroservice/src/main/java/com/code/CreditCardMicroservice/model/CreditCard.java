package com.code.CreditCardMicroservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;

@Document
@Data
public class CreditCard {

    @Id
    private String id;
    private Long cardNumber;
    private String username;
    private String firstName;
    private String lastName;
    private Date cardCreated;
    private Date cardExpiration;
    private Double creditLimit = 1000.0;
    private Double creditBalance = 0.0;
}
