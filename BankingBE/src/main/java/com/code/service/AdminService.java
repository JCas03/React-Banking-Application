package com.code.service;

import com.code.model.User;
import com.code.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public ResponseEntity<User> getUserById(String id) {
        Optional<User> userData = adminRepository.findById(id);

        if(userData.isPresent()) {
            return new ResponseEntity<>(userData.get(), HttpStatus.OK);
        }
        else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }

    }

    public List<User> getAllUsers() {
        return adminRepository.findAll();
    }

    public void deleteUserById(String id) {
        adminRepository.deleteById(id);
    }
}
