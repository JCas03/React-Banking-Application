package com.code.AppointmentMicroservice.service;

import com.code.AppointmentMicroservice.model.Appointment;
import com.code.AppointmentMicroservice.repository.AppointmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.Optional;


@Service
public class AppointmentService {

    @Autowired
    private AppointmentRepository appointmentRepository;

    public Appointment getAppointmentByUsername(String userName) {
        return appointmentRepository.findByUsername(userName);
    }

    public Appointment getAppointmentByEmail(String email) {
        return appointmentRepository.findByEmail(email);
    }

    public ResponseEntity<String> save(Appointment appointment) {
        appointmentRepository.save(appointment);
        return new ResponseEntity<String>("First Name: " + appointment.getFirstName() +
                "\nLast Name: " + appointment.getLastName() +
                "\nEmail: " + appointment.getEmail() +
                "\nPhone Number: " + appointment.getPhoneNumber() +
                "\nAppointment Date: " + appointment.getAppointmentDate() +
                "\nMeeting Details: " + appointment.getDetails(), HttpStatus.CREATED);
    }

    public ResponseEntity<String> deleteAppointmentByUsername(String userName) {
        Appointment apt = appointmentRepository.findByUsername(userName);

        try {

            appointmentRepository.delete(apt);
            return new ResponseEntity<String>("Appointment for " + apt.getFirstName() + " " + apt.getLastName()
                    + " on " + apt.getAppointmentDate() + " was successfully deleted.", HttpStatus.OK);
        } catch(Exception e) {
            return new ResponseEntity<String>("No appointments for " + apt.getFirstName() + " " +
                    apt.getLastName() + " were found.", HttpStatus.NOT_FOUND);
        }
    }
}
