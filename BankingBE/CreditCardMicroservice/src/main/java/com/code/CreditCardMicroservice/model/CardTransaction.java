package com.code.CreditCardMicroservice.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data
public class CardTransaction {

    @Id
    @ApiModelProperty(notes = "Transaction Id",name="TransId",required=true,value="1")
    private String transactionId;
    @ApiModelProperty(notes = "Card Number",name="CardNumber",required=true,value="99")
    private Long cardNumber;
    @ApiModelProperty(notes = "Username",name="Username",required=true,value="JohnDoe")
    private String username;
    @ApiModelProperty(notes = "Transaction Amount",name="TransactionAmount",required=true,value="9999.99")
    private Double transactionAmt;
    @ApiModelProperty(notes = "Transaction Date-Time",name="TransactionDateTime",required=true,value="99:99:99 9-99-9999")
    private LocalDateTime transactionDateTime;


}
