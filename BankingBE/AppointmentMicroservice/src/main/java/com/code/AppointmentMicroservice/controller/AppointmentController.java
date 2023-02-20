package com.code.AppointmentMicroservice.controller;


import com.code.AppointmentMicroservice.model.Appointment;
import com.code.AppointmentMicroservice.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/new-appointment")
    public ResponseEntity<String> save(@RequestBody Appointment appointment) {
        return appointmentService.save(appointment);
    }

    @GetMapping("/appointment/{userName}")
    public Appointment getAppointmentByUsername(@PathVariable("userName") String userName) {
        return appointmentService.getAppointmentByUsername(userName);
    }

    @DeleteMapping("/delete-appointment/{userName}")
    public ResponseEntity<String> deleteAppointmentByUsername(@PathVariable("userName") String userName) {
        return appointmentService.deleteAppointmentByUsername(userName);
    }
}
