package com.code.AccountMicroservice.repository;

import com.code.AccountMicroservice.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AccountRepository extends MongoRepository<Account, String> {
    Account findByAccountNumber(String accountNumber);
}
