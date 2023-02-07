package com.code.controller;

import com.code.model.User;
import com.code.repository.AdminRepository;
import com.code.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminRepository adminRepository;

    @GetMapping("/users")
    public List<User> getAllUsers() {
        return adminService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> getUserById(@PathVariable("id")String id) {
        return adminService.getUserById(id);
    }

    @PostMapping("/new-user")
    public ResponseEntity<String> save(@RequestBody User user) {
        adminRepository.save(user);
        return new ResponseEntity<String>("User created successfully",HttpStatus.OK);
    }
    @DeleteMapping("/delete-user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        try {
            adminService.deleteUserById(id);
            return new ResponseEntity<String>("User was successfully deleted", HttpStatus.NO_CONTENT);
        } catch(Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") String id, @RequestBody User user) {
        Optional<User> userData = adminRepository.findById(id);

        if(userData.isPresent()) {
            User _user = userData.get();
            _user.setUserName(user.getUserName());
            _user.setFirstName(user.getFirstName());
            _user.setLastName(user.getLastName());
            _user.setPassword(user.getPassword());
            return new ResponseEntity<>(adminRepository.save(_user), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

}
