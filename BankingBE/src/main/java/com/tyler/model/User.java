package com.tyler.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class User {

    private String userName;
    private String firstName;
    private String lastName;
    private String email;
    private String password;

}
