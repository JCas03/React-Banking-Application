package com.code.AccountMicroservice.controller;

import com.code.AccountMicroservice.model.Account;
import com.code.AccountMicroservice.model.Transaction;
import com.code.AccountMicroservice.service.RabbitMQSender;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(value = "/api")
public class ProducerController {
    private RabbitMQSender rabbitMQSender;
    @Autowired
    public ProducerController(RabbitMQSender rabbitMQSender) {
        this.rabbitMQSender = rabbitMQSender;
    }
    @Value("${app.message}")
    private String message;

    @PostMapping(value = "user")
    public String publishUserDetails(@RequestBody Transaction transaction) {
        rabbitMQSender.send(transaction);
        return message;
    }
}
