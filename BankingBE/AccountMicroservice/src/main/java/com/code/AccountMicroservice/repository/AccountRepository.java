package com.code.AccountMicroservice.repository;

import com.code.AccountMicroservice.model.Account;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AccountRepository extends MongoRepository<Account, String> {
    Account findByAccountNumber(String accountNumber);

    Account findAccountByAccountId(String id);
    List<Account> findAllAccountsByAccountNumber(String accountNumber);

    List<Account> findAllAccountsByUsername(String userName);
}
