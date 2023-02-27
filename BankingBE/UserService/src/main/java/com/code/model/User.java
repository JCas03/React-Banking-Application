package com.code.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
@Data
public class User {

    @Id
    @ApiModelProperty(notes = "User Id",name="id",required=true,value="1")
    private String id;
    @ApiModelProperty(notes = "User Name",name="username",required=true,value="Test Username")
    private String userName;
    @ApiModelProperty(notes = "First Name",name="FirstName",required=true,value="Test First Name")
    private String firstName;
    @ApiModelProperty(notes = "Last Name",name="LastName",required=true,value="Test Last Name")
    private String lastName;
    @ApiModelProperty(notes = "Email",name="email",required=true,value="Test Email")
    private String email;
    @ApiModelProperty(notes = "Password",name="password",required=true,value="Test Password")
    private String password;



}
