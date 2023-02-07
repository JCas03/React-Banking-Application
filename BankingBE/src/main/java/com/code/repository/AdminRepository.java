package com.code.repository;

import com.code.model.User;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AdminRepository extends MongoRepository <User, String> {
    public List<User> findAll();

}
