import { useAuth0 } from "@auth0/auth0-react";
import { Button, TextField } from "@mui/material";
import {
  DateTimePicker,
  StaticDatePicker,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";
import UserService from "../services/UserService";
import AppointmentService from "../services/AppointmentService";

export default function AppointmentDisplay() {
  const [details, setDetails] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const { user, isAuthenticated, isLoading } = useAuth0();

  const loadUser = async () =>{
    const userData = await UserService.getUserByEmail(user.email);
    setFirstName(userData.data.firstName);
    setLastName(userData.data.lastName);
  }
  loadUser();
  

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    console.log(user.name);
    console.log(firstName);
    console.log(lastName);
    console.log(dateTime.$d);
    let appointment = {username: user.name, firstName: firstName, lastName: lastName, 
      details: details, appointmentDate: dateTime};
    console.log(JSON.stringify(appointment));
    AppointmentService.createNewAppointment(JSON.stringify(appointment));
  };

  return (
    <>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <h2>Appointment Scheduler</h2>
        <DemoItem>
          <StaticDateTimePicker
            orientation="landscape"
            onChange={(a) => setDateTime(a)}
          />
        </DemoItem>
        <TextField
          label="Reason For appointment"
          onChange={(e) => setDetails(e.target.value)}
          required
          variant="outlined"
          color="primary"
          type="text"
        />
        <Button variant="outlined" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </>
  );
}
