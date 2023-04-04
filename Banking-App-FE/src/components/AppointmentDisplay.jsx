import { useAuth0 } from "@auth0/auth0-react";
import { Button, TextField } from "@mui/material";
import {
  DateTimePicker,
  StaticDatePicker,
  StaticDateTimePicker,
} from "@mui/x-date-pickers";
import { DemoItem } from "@mui/x-date-pickers/internals/demo";
import React, { useState } from "react";

export default function AppointmentDisplay() {
  const [details, setDetails] = useState("");
  const [dateTime, setDateTime] = useState("");
  const { user, isAuthenticated, isLoading } = useAuth0();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(details);
    console.log(user.name);
    console.log(dateTime);
    // const dt = dateTime.map((dateT) => dateT.$d)
    // console.log(dt);
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
          onChange={(e) => setDetails(e)}
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
