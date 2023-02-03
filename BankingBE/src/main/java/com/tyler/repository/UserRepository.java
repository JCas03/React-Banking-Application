package com.tyler.repository;

import com.tyler.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends MongoRepository<User, Long> {

    public User findById(long id);
    public List<User> findAll();
}
