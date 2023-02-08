package com.code.service;

import com.code.model.User;
import com.code.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public User getUserById(long id) {
        return userRepository.findById(id);
    }

    public void createNewUser(User user) {
        userRepository.save(user);
    }

    /*public void updateUser(User user, long id) {
        user.setId(id);
        userRepository.save(user);
    }*/
}
