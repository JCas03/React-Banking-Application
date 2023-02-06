package com.tyler.controller;

import com.tyler.model.User;
import com.tyler.repository.AdminRepository;
import com.tyler.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private AdminService adminService;

    @Autowired
    private AdminRepository repo;

    @GetMapping("/admin/users")
    public List<User> getAllUsers() {
        return adminService.getAllUsers();
    }

    @GetMapping("/admin/user/{id}")
    public User getUserById(@PathVariable(value = "id") long id) {
        return adminService.getUserById(id);
    }

    @PostMapping("/admin/new-user")
    public ResponseEntity<String> save(@RequestBody User user) {
        repo.save(user);
        return new ResponseEntity<String>("User created successfully",HttpStatus.OK);
    }
    @DeleteMapping("/admin/delete-user/{id}")
    public void deleteUserById(@PathVariable(value = "id") long id) {
        adminService.deleteUserById(id);
    }
    @PutMapping("/admin/user/{id}")
    public ResponseEntity<User> updateUser(@RequestBody User user, @PathVariable long id){

        User result = adminService.updateUser(user, id);

        if(result == null) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        } else {
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
    }
}
