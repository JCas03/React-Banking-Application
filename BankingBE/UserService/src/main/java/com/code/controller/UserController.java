package com.code.controller;

import com.code.model.User;
import com.code.service.UserService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@Api(value = "User Rest Controller", tags = "REST API for User")
@RequestMapping("/userms")
public class UserController {

    @Autowired
    private UserService userService;

    @ApiOperation(value = "Get Users ", response = Iterable.class, tags = "getUsers")
    @GetMapping("admin/users")
//    @PreAuthorize("hasAuthority('SCOPE_api:admin')")
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @ApiOperation(value = "Get User By ID ", tags = "getUserById")
    @GetMapping("/user/{id}")
    public Optional<User> getUserById(@PathVariable("id")String id) {
        return userService.getUserById(id);
    }

    @ApiOperation(value = "Create New User ", tags = "CreateUser")
    @PostMapping("admin/new-user")
//    @PreAuthorize("hasAuthority('api:admin')")
    public ResponseEntity<String> save(@RequestBody User user) {
        return userService.save(user);
    }

    @ApiOperation(value = "Delete User By Id ", tags = "DeleteUser")
    @DeleteMapping("admin/delete-user/{id}")
//    @PreAuthorize("hasAuthority('api:admin')")
    public ResponseEntity<String> deleteUser(@PathVariable("id") String id) {
        return userService.deleteUserById(id);
    }

    @ApiOperation(value = "Update User ", tags = "UpdateUser")
    @PutMapping("/update-user/{id}")
    public ResponseEntity<User> updateUser(@PathVariable("id") String id, @RequestBody User user) {
        return userService.updateUser(id, user);
    }

    @ApiOperation(value = "Check User Email", tags = "checkUserEmail")
    @GetMapping("/check-user-email/{email}")
    public User getUserByEmail(@PathVariable("email")String email) {
        return userService.getUserByEmail(email);
    }



    /*public ResponseEntity<User> getUserByEmail(@PathVariable String email) {
        Optional<User> user = Optional.ofNullable(userService.getUserByEmail(email));
        if(!user.isPresent()) {
            return ResponseEntity.notFound().build();
        }
        return (userService.getUserByEmail(email));
    }*/

}
