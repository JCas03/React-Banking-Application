package com.code.CreditCardMicroservice.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.util.Date;

@Document
@Data
public class CreditCard {

    @Id
    @ApiModelProperty(notes = "Id",name="id",required=true,value="1")
    private String id;
    @ApiModelProperty(notes = "Card Number",name="CardNumber",required=true,value="9999999999")
    private Long cardNumber;
    @ApiModelProperty(notes = "Username",name="Username",required=true,value="JohnDoe")
    private String username;
    @ApiModelProperty(notes = "First Name",name="FirstName",required=true,value="John")
    private String firstName;
    @ApiModelProperty(notes = "Last Name",name="LastName",required=true,value="Doe")
    private String lastName;
    @ApiModelProperty(notes = "Card Created",name="CardCreated",required=true,value="9-99-9999")
    private Date cardCreated;
    @ApiModelProperty(notes = "Card Expiration",name="CardExpiration",required=true,value="9-99-9999")
    private Date cardExpiration;
    @ApiModelProperty(notes = "Credit Limit",name="CreditLimit",required=true,value="9999.99")
    private Double creditLimit = 1000.0;
    @ApiModelProperty(notes = "Credit Balance",name="CreditBalance",required=true,value="9999.99")
    private Double creditBalance = 0.0;
}
