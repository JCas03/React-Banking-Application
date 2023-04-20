import { useAuth0 } from "@auth0/auth0-react";
import { Button, InputLabel, TextField } from "@mui/material";
import {
  DateTimePicker,
  StaticDatePicker,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import React, { useEffect, useState } from "react";
import UserService from "../services/UserService";
import AppointmentService from "../services/AppointmentService";

export default function AppointmentDisplay() {
  const [details, setDetails] = useState("");
  const [dateTime, setDateTime] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    console.log(firstName);
    console.log(lastName);
    console.log(email);
    console.log(phoneNumber);
    console.log(dateTime.$d);
    let appointment = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      phoneNumber: phoneNumber,
      details: details,
      appointmentDate: dateTime,
    };
    console.log(JSON.stringify(appointment));
    AppointmentService.createNewAppointment(JSON.stringify(appointment));
  };

  return (
    <form autoComplete="off" onSubmit={handleSubmit}>
      <h2 style={{ textAlign: "center" }}>Appointment Scheduler</h2>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div style={{ marginBottom: "20px" }}>
          <DemoItem>
            <StaticDateTimePicker
              orientation="landscape"
              onChange={(a) => setDateTime(a)}
              renderInput={(props) => <TextField {...props} />}
            />
          </DemoItem>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <InputLabel
            htmlFor="firstName"
            style={{ color: "#cfd8dc", fontSize: "1.2rem" }}
          >
            First Name
          </InputLabel>
          <TextField
            id="firstName"
            label="First Name"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            required
            variant="outlined"
            type="text"
            style={{
              backgroundColor: "#cfd8dc",
              color: "#cfd8dc",
              borderRadius: "5px",
              marginTop: "10px",
              width: "500px",
              rows: 1,
              cols: 50,
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <InputLabel
            htmlFor="lastName"
            style={{ color: "#cfd8dc", fontSize: "1.2rem" }}
          >
            Last Name
          </InputLabel>
          <TextField
            id="lastName"
            label="Last Name"
            onChange={(e) => setLastName(e.target.value)}
            value={lastName}
            required
            variant="outlined"
            type="text"
            style={{
              backgroundColor: "#cfd8dc",
              color: "#cfd8dc",
              borderRadius: "5px",
              marginTop: "10px",
              width: "500px",
              rows: 1,
              cols: 50,
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <InputLabel
            htmlFor="email"
            style={{ color: "#cfd8dc", fontSize: "1.2rem" }}
          >
            Email
          </InputLabel>
          <TextField
            id="email"
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            variant="outlined"
            type="email"
            style={{
              backgroundColor: "#cfd8dc",
              color: "#cfd8dc",
              borderRadius: "5px",
              marginTop: "10px",
              width: "500px",
              rows: 1,
              cols: 50,
            }}
          />
        </div>
        <div style={{ marginBottom: "20px" }}>
          <InputLabel
            htmlFor="phoneNumber"
            style={{ color: "#cfd8dc", fontSize: "1.2rem" }}
          >
            Phone Number
          </InputLabel>
          <TextField
            id="phoneNumber"
            label="Phone Number"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            required
            variant="outlined"
            type="tel"
            style={{
              backgroundColor: "#cfd8dc",
              color: "#cfd8dc",
              borderRadius: "5px",
              marginTop: "10px",
              width: "500px",
              rows: 1,
              cols: 50,
            }}
          />
        </div>
        <InputLabel
          htmlFor="details"
          style={{ color: "#cfd8dc", fontSize: "1.2rem" }}
        >
          Reason For appointment
        </InputLabel>
        <TextField
          id="details"
          label="Reason For appointment"
          onChange={(e) => setDetails(e.target.value)}
          required
          variant="outlined"
          type="text"
          style={{
            backgroundColor: "#cfd8dc",
            color: "#cfd8dc",
            borderRadius: "5px",
            marginTop: "10px",
            width: "500px",
            rows: 10,
            cols: 50,
          }}
          multiline
        />
      </div>
      <div style={{ display: "flex", justifyContent: "flex-end" }}>
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{
            backgroundColor: "#063970",
            color: "#cfd8dc",
            marginTop: "10px",
          }}
        >
          Submit
        </Button>
      </div>
    </form>
  );
}
