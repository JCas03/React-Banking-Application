package com.code.AccountMicroservice.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDateTime;

@Document
@Data
public class Transaction {

    @Id
    @ApiModelProperty(notes = "Transaction Id",name="TransactionId",required=true,value="1")
    private String transactionId;
    @ApiModelProperty(notes = "Account Number",name="AccountNumber",required=true,value="1")
    private String accountNumber;
    @ApiModelProperty(notes = "Outgoing Account Number",name="OutgoingAccountNumber",required=true,value="1")
    private String outgoingAccountNumber;
    @ApiModelProperty(notes = "Incoming Account Number",name="IncomingAccountNumber",required=true,value="1")
    private String incomingAccountNumber;
    @ApiModelProperty(notes = "Withdrawal Amount",name="WithdrawalAmount",required=true,value="9999.99")
    private Double withdrawalAmount;
    @ApiModelProperty(notes = "Deposit Amount",name="DepositAmount",required=true,value="9999.99")
    private Double depositAmount;
    @ApiModelProperty(notes = "Transfer Amount",name="TransferAmount",required=true,value="9999.99")
    private Double transferAmount;
    @ApiModelProperty(notes = "Transaction Date Time",name="TransactionDateTime",required=true,value="99-99-9999")
    private LocalDateTime transactionDateTime;
}
