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
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { StaticDateTimePicker } from "@mui/x-date-pickers/StaticDateTimePicker";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";

import AppointmentService from "../services/AppointmentService";

export default function CardServices() {



  // let uName = "Username"
  const [uName, setUName] = useState("Loading...");
  const [cardData, setCardData] = useState("Loading....");
;


  // let cardData
  // let cardNumber = "Card Number"
  const { user } = useAuth0();

  const loadCards = async () => {
    const resData = await UserService.getUserByEmail(user.email);

    const cardData = await CardService.getCardsByUsername(uName);

    setUName(resData.data.userName);
    setCardData(cardData);
    // console.log(uName);
    // console.log(cardData.data);

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
    <Button href="/schedule-appointment">
            Schedule Appointment
          </Button>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Card sx={{ minWidth: 275 }}>
              {cardData.data?.map((card) => (
                <>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 14 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      {uName}
                    </Typography>
                    <Typography variant="h5" component="div" gutterBottom>
                      {card.cardNumber}
                    </Typography>
                    <Typography sx={{ mb: 1 }} color="text.secondary">
                      Balance: ${card.creditBalance}
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      Credit Limit: ${card.creditLimit}
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
                </>
              ))}
            </Card>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
