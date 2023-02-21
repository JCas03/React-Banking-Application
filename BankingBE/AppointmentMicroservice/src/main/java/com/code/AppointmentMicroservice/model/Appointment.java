package com.code.AppointmentMicroservice.model;

import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.time.LocalDate;
import java.time.LocalDateTime;

@Document
@Data
public class Appointment {
    @Id
    private String id;
    private String username;
    private String firstName;
    private String lastName;
    private String details;
    private LocalDate appointmentDate;

}
