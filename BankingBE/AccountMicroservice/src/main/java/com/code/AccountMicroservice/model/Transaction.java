package com.code.AccountMicroservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Document
@Data
public class Transaction {

    @Id
    private String transactionId;
    private String accountNumber;
    private BigDecimal transactionAmount;
    private LocalDateTime transactionDateTime;
}
