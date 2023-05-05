package com.code.AccountMicroservice.repository;

import com.code.AccountMicroservice.model.Transaction;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TransactionRepository extends MongoRepository<Transaction, String> {
    List<Transaction> findByAccountNumber(String accountNumber);

    List<Transaction> findByAccountId(String accountId);
}
