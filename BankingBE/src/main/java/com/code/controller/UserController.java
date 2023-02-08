package com.code.controller;

import com.code.service.UserService;
import com.code.model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class UserController {

    @Autowired UserService userService;

    @GetMapping("/user/{id}")
    public User getUserById(@PathVariable("id") long id){
        return userService.getUserById(id);
    }

    @PostMapping("/user")
    public ResponseEntity<HttpStatus> createNewUser(@RequestBody User user){;
        try{
            userService.createNewUser(user);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    /*@PutMapping("/user/{id}")
    public ResponseEntity<HttpStatus> updateUser(@RequestBody User user, @PathVariable long id){

        try{
            userService.updateUser(user, id);
            return new ResponseEntity<>(HttpStatus.CREATED);
        }catch (Exception e){
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }*/

}
