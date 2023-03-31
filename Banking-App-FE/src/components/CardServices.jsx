import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import Button from "@mui/material/Button";
import axios from "axios";
import CardService from "../services/CardService";
import UserService from "../services/UserService";
import { useAuth0, User } from "@auth0/auth0-react";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import AppointmentPopup from "./AppointmentPopup";
import AppointmentService from "../services/AppointmentService";




export default function CardServices() {

  const handleChange = (date) => {  
    this.setState({  
      startDate: date  
    });  
  };  
  
  const onFormSubmit = (e) => {  
    e.preventDefault();  
    console.log(this.state.startDate)  
  };  

  const [buttonPopup, setButtonPopup] = useState(false);
  // let uName = "Username"
  const [uName, setUname] = useState("Loading....");
  const [cardNumber, setCardNumber] = useState("Loading....")
  const [creditBalance, setCreditBalance] = useState("Loading....")
  const [creditLimit, setCreditLimit] = useState("Loading....")
  const [selectedDate, setSelectedDate] = useState(null);
  console.log({selectedDate});
  const [cardData, setCardData] = useState("Loading....");

  function csClearStates(){
    setUName();
    setCardData();
  }
  
  // let cardData
  // let cardNumber = "Card Number"
  const { user } = useAuth0();



  const loadCards = async () => {
    const resData = await UserService.getUserByEmail(user.email);

    const cardData = await CardService.getCardsByUsername(uName);

    setUName(resData.data.userName);
    setCardData(cardData);
    console.log(uName);
    console.log(cardData.data);


    // const transactionData = await CardService.viewCardTransactions(cardNumber)
    // let lastTransactionId = transactionData.data.slice(-1)[0].transactionId;
    // let lastTransactionAmt = transactionData.data.slice(-1)[0].transactionAmt;

    // console.log(transactionData.data.slice(-1)[0]);
    // console.log("Last Transaction ID: " + lastTransactionId);
    // console.log("Last Transaction Amount: " + lastTransactionAmt);
  };
  loadCards();

  return (
    <>
     <form onSubmit={e => {handleSubmit(e)}}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Button onClick={() => setButtonPopup(true)}>Schedule Appointment</Button>
          <AppointmentPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
            <h3>Appointment Scheduler</h3>
            <p>Please select a date for your appointment</p>
            <DemoContainer
              components={[
                'DateTimePicker',
                'MobileDateTimePicker',
                'DesktopDateTimePicker',
                'StaticDateTimePicker',
              ]}
            >
              <DemoItem>
                <StaticDateTimePicker value={selectedDate} onChange={(newValue) => { setSelectedDate(newValue) }} />
              </DemoItem>
            </DemoContainer>
            <br></br>
            <TextField
              id="outlined-textarea"
              label="Reason for Appointment"
              placeholder="Enter details"
              multiline
              margin="normal"
            />
          </AppointmentPopup>
        </LocalizationProvider>
      </form>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {uName}
                </Typography>
                <Typography variant="h5" component="div" gutterBottom>
                  {cardNumber}
                </Typography>
                <Typography sx={{ mb: 1 }} color="text.secondary">
                  Balance: ${creditBalance}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Credit Limit: ${creditLimit}
                </Typography>
                <Typography variant="body2">
                  Most Recent Transaction
                  <br />
                  Transaction ID: xxxxxxxxxxxx $123 at Place_Name
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View All Transactions</Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  CreditCard Name
                </Typography>
                <Typography variant="h5" component="div">
                  Card - Number
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  Credit Balance
                </Typography>
                <Typography variant="body2">
                  Most Recent Transaction
                  <br />
                  Transaction ID: xxxxxxxxxxxx $321 at Place_Name
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">View All Transactions</Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
