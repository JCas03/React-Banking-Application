package com.code.AppointmentMicroservice.controller;


import com.code.AppointmentMicroservice.model.Appointment;
import com.code.AppointmentMicroservice.service.AppointmentService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/appms")
@Api(value = "Appointment Rest Controller", tags = "REST API for Appointments")
@CrossOrigin(origins = "http://127.0.0.1:5173")
public class AppointmentController {
    @Autowired
    private AppointmentService appointmentService;

    @PostMapping("/new-appointment")
    @ApiOperation(value = "Create Appointment ", tags = "CreateAppointment")
    public ResponseEntity<String> save(@RequestBody Appointment appointment) {
        return appointmentService.save(appointment);
    }

    @GetMapping("/appointment/{userName}")
    @ApiOperation(value = "Get Appointment By Username", tags = "GetAppointmentByUsername")
    public Appointment getAppointmentByUsername(@PathVariable("userName") String userName) {
        return appointmentService.getAppointmentByUsername(userName);
    }

    @GetMapping("/appointment/{email}")
    @ApiOperation(value = "Get Appointment By Email", tags = "GetAppointmentByEmail")
    public Appointment getAppointmentByEmail(@PathVariable("email") String email) {
        return appointmentService.getAppointmentByEmail(email);
    }

    @DeleteMapping("/delete-appointment/{userName}")
    @ApiOperation(value = "Delete Appointment By Username", tags = "DeleteAppointmentByUsername")
    public ResponseEntity<String> deleteAppointmentByUsername(@PathVariable("userName") String userName) {
        return appointmentService.deleteAppointmentByUsername(userName);
    }
}
