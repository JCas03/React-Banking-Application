package com.code.service;

import com.code.model.User;
import com.code.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    @Autowired
    private UserRepository userRepository;


    public ResponseEntity<String>  save(User user) {
        userRepository.save(user);
        return new ResponseEntity<String>("User created successfully", HttpStatus.OK);
    }

    public Optional<User> getUserById(String id) {
        return userRepository.findById(id);
    }

    public ResponseEntity<String> createNewUser(User user) {

        userRepository.save(user);
        return new ResponseEntity<>("User " + user.getUserName() + " with the id of " + user.getId() + " Has been created. ", HttpStatus.CREATED);
    }

    public ResponseEntity<String> deleteUserById(String id) {
        try {
            userRepository.deleteById(id);
            return new ResponseEntity<String>("User was successfully deleted", HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    public User getUserByEmail(String email) {
        List<User> userList = userRepository.findAll();
        User newUser = new User();
        for(User user : userList) {
            if(user.getEmail() != null) {
                if((user.getEmail().toString()).equals(email)) {
                    newUser = user;
                    return user;
                }
            }
        }
        return null;
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public ResponseEntity<User> updateUser(String id, User user) {
        Optional<User> userData = userRepository.findById(id);

        if(userData.isPresent()) {
            User _user = userData.get();
            _user.setUserName(user.getUserName());
            _user.setFirstName(user.getFirstName());
            _user.setLastName(user.getLastName());
            _user.setEmail(user.getEmail());
            _user.setPassword(user.getPassword());
            return new ResponseEntity<>(userRepository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }


}
