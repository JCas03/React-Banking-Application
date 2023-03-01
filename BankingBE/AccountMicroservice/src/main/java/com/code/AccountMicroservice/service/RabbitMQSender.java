package com.code.AccountMicroservice.service;

import com.code.AccountMicroservice.model.Transaction;
import org.springframework.amqp.core.AmqpTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;


@Service
public class RabbitMQSender {

    @Autowired
    private AmqpTemplate rabbitTemplate;

    @Value("${code.rabbitmq.exchange}")
    private String exchange;

    @Value("${code.rabbitmq.routingkey}")
    private String routingkey;

    public void send(Transaction transaction) {
        rabbitTemplate.convertAndSend(exchange, routingkey, transaction);
        System.out.println("Send msg = " + transaction);

    }
}