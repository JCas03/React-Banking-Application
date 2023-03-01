package com.code.domain;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import lombok.Data;
import org.springframework.stereotype.Component;

import java.io.Serializable;
import java.time.LocalDateTime;

@Component
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id", scope = Transaction.class)
@Data
public class Transaction implements Serializable {

    private String transactionId;
    private String accountNumber;
    private String outgoingAccountNumber;
    private String incomingAccountNumber;
    private Double withdrawalAmount;
    private Double depositAmount;
    private Double transferAmount;
    private LocalDateTime transactionDateTime;


}
