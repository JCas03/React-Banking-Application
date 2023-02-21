package com.code.controller;

import com.code.model.User;
import com.code.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired
    private UserService userService;


    @GetMapping("admin/users")
//    @PreAuthorize("hasAuthority('SCOPE_api:admin')")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable("id")String id) {
        return userService.getUserById(id);
    }

    @PostMapping("admin/new-user")
//    @PreAuthorize("hasAuthority('api:admin')")
    public ResponseEntity<String> save(@RequestBody User user) {
        return userService.save(user);
    }
    @DeleteMapping("admin/delete-user/{id}")
//    @PreAuthorize("hasAuthority('api:admin')")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        return userService.deleteUserById(id);
    }

    @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") String id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

}
