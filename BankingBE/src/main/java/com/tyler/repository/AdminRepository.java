package com.tyler.repository;

import com.tyler.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AdminRepository extends MongoRepository <User, Long> {
    public User findById(long id);
    public List<User> findAll();
}
