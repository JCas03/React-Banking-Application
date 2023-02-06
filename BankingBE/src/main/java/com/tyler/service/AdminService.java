package com.tyler.service;

import com.tyler.model.User;
import com.tyler.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    public User getUserById(long id) {
        return adminRepository.findById(id);
    }

    public List<User> getAllUsers() {
        return adminRepository.findAll();
    }

    public void deleteUserById(long id) {
        adminRepository.deleteById(id);
    }

    public User updateUser(User user, long id) {
        Optional<User> userRepo = Optional.ofNullable(adminRepository.findById(id));

        if (!userRepo.isPresent()) {
            return null;
        }
        adminRepository.save(user);
         return(user);
    }
}
