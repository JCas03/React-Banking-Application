package com.code.AppointmentMicroservice.repository;

import com.code.AppointmentMicroservice.model.Appointment;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepository extends MongoRepository<Appointment, String> {

    Appointment findByUsername(String userName);

    Appointment findByEmail(String email);

}
