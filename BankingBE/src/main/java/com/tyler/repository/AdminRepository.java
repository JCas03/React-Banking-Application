package com.tyler.repository;

import com.tyler.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface AdminRepository extends MongoRepository <User, Long> {

}
