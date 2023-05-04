package com.code.AccountMicroservice.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.math.BigDecimal;
import java.time.LocalDateTime;

@Document
@Data
public class Account {

    @Id
    @ApiModelProperty(notes = "Account Id",name="AccountId",required=true,value="1")
    private String accountId;
    @ApiModelProperty(notes = "Account Number",name="AccountNumber",required=true,value="1")
    private String accountNumber;
    @ApiModelProperty(notes = "Account Type",name="AccountType",required=true,value="Test Account Type")
    private String accountType;
    @ApiModelProperty(notes = "Account Name",name="AccountName",required=true,value="Test Account Name")
    private String accountName;
    @ApiModelProperty(notes = "Username",name="UserName",required=true,value="Test Username")
    private String username;
    @ApiModelProperty(notes = "Balance Date",name="BalanceDate",required=true,value="99-99-9999")
    private LocalDateTime balanceDate = LocalDateTime.now();
    @ApiModelProperty(notes = "Available Balance",name="AvailableBalance",required=true,value="9999.99")
    private Double availableBalance = 0.0;
}
