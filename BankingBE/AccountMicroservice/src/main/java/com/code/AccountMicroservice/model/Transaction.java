package com.code.AccountMicroservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data
public class Transaction {

    @Id
    private String transactionId;
    private String accountNumber;
    private Double withdrawalAmount;
    private Double depositAmount;
    private LocalDateTime transactionDateTime;
}
