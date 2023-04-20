package com.code.AppointmentMicroservice.model;

import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Document
@Data
public class Appointment {
    @Id
    @ApiModelProperty(notes = "Appointment Id",name="AppointmentId",required=true,value="1")
    private String id;
    @ApiModelProperty(notes = "User Name",name="username",required=true,value="Test Username")
    private String username;
    @ApiModelProperty(notes = "Email",name="Email",required=true,value="Test Email")
    private String email;
    @ApiModelProperty(notes = "First Name",name="FirstName",required=true,value="Test First Name")
    private String firstName;
    @ApiModelProperty(notes = "Last Name",name="LastName",required=true,value="Test Last Name")
    private String lastName;
    @ApiModelProperty(notes = "Phone Number",name="Phone Number",required=true,value="Test Phone Number")
    private String phoneNumber;
    @ApiModelProperty(notes = "Details",name="Details",required=true,value="Test Details")
    private String details;
    @ApiModelProperty(notes = "Appointment Date",name="AppointmentDate",required=true,value="99-99-9999")
    private String appointmentDate;

}
