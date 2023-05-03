import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import InputLabel from "@material-ui/core/InputLabel";
import Typography from '@material-ui/core/Typography';

function ProfileService() {
  const [firstName, setFirstName] = useState("First Name");
  const [lastName, setLastName] = useState("Last Name");
  const [username, setUsername] = useState("Username");
  const [password, setPassword] = useState("Password")

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the first name and last name to the state or do something else with it
    console.log(`First name: ${firstName}, Last name: ${lastName}, Username: ${username}, Password: ${password}`);
  };

  return (
    <div>
    <div>
      <Typography variant="h2" style={{ textAlign: 'center', fontSize: '2rem', color: '#777', marginTop: '1rem' }} gutterBottom>
        User Profile
      </Typography>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <InputLabel htmlFor="first-name" style={{ color: "#cfd8dc" }}>
            First Name
          </InputLabel>
          <TextField
            id="first-name"
            variant="outlined"
            margin="normal"
            value={firstName}
            onChange={handleFirstNameChange}
            style={{
              backgroundColor: "#cfd8dc",
              color: "#cfd8dc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div>
          <InputLabel htmlFor="last-name" style={{ color: "#cfd8dc" }}>
            Last Name
          </InputLabel>
          <TextField
            id="last-name"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={handleLastNameChange}
            style={{
              backgroundColor: "#cfd8dc",
              color: "#cfd8dc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div>
          <InputLabel htmlFor="username" style={{ color: "#cfd8dc" }}>
            Username
          </InputLabel>
          <TextField
            id="username"
            variant="outlined"
            margin="normal"
            value={username}
            onChange={handleUsernameChange}
            style={{
              backgroundColor: "#cfd8dc",
              color: "#cfd8dc",
              borderRadius: "5px",
            }}
          />
        </div>
        <div>
          <InputLabel htmlFor="password" style={{ color: "#cfd8dc" }}>
            Password
          </InputLabel>
          <TextField
            id="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={handlePasswordChange}
            style={{
              backgroundColor: "#cfd8dc",
              color: "#cfd8dc",
              borderRadius: "5px",
            }}
          />
        </div>
        <Button
          variant="contained"
          type="submit"
          style={{
            backgroundColor: "#063970",
            color: "#cfd8dc",
            marginTop: "10px",
          }}
        >
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ProfileService;
