package com.code.AccountMicroservice.model;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data
@JsonIdentityInfo(generator = ObjectIdGenerators.IntSequenceGenerator.class, property = "@id", scope = Transaction.class)
public class Transaction {

    @Id
    @ApiModelProperty(notes = "Transaction Id",name="TransactionId",value="1")
    private String transactionId;
    @ApiModelProperty(notes = "Account Number",name="AccountNumber",value="1")
    private String accountNumber;
    @ApiModelProperty(notes = "Account Id",name="AccountId",required=true,value="1")
    private String accountId;
    @ApiModelProperty(notes = "Outgoing Account Number",name="OutgoingAccountNumber",value="1")
    private String outgoingAccountNumber;
    @ApiModelProperty(notes = "Incoming Account Number",name="IncomingAccountNumber",value="1")
    private String incomingAccountNumber;
    @ApiModelProperty(notes = "Withdrawal Amount",name="WithdrawalAmount",value="9999.99")
    private Double withdrawalAmount;
    @ApiModelProperty(notes = "Deposit Amount",name="DepositAmount",value="9999.99")
    private Double depositAmount;
    @ApiModelProperty(notes = "Transfer Amount",name="TransferAmount",value="9999.99")
    private Double transferAmount;
    @ApiModelProperty(notes = "Transaction Date Time",name="TransactionDateTime",value="99-99-9999")
    private LocalDateTime transactionDateTime;
}
