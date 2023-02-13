package com.code.AccountMicroservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Document
@Data
public class Account {

    @Id
    private String id;
    private String accountNumber;
    private String accountType;
    private String accountName;
    private LocalDateTime balanceDate = LocalDateTime.now();
    private Double availableBalance = 0.0;
}
