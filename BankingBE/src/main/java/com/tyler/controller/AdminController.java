package com.tyler.controller;

import com.tyler.model.User;
import com.tyler.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class AdminController {
    @Autowired
    private UserService userService;

    @GetMapping("/admin/users")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/admin/user/{id}")
    public User getUserById(@PathVariable(value = "id") long id) {
        return userService.getUserById(id);
    }

}
