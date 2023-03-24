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

export default function CardServices() {
  // let uName = "Username"
  const [uName, setUname] = useState("Loading....");
  const [cardNumber, setCardNumber] = useState("Loading....")
  const [creditBalance, setCreditBalance] = useState("Loading....")
  const [creditLimit, setCreditLimit] = useState("Loading....")
  // let cardData
  // let cardNumber = "Card Number"
  const { user } = useAuth0();

  const loadCards = async () => {


    const resData = await UserService.getUserByEmail(user.email)
    setUname(resData.data.userName)

    const cardData = await CardService.getCardsByUsername(uName)
    setCardNumber(cardData.data[0].cardNumber);
    setCreditBalance(cardData.data[0].creditBalance);
    setCreditLimit(cardData.data[0].creditLimit);
    
    // const transactionData = await CardService.viewCardTransactions(cardNumber)
    // let lastTransactionId = transactionData.data.slice(-1)[0].transactionId;
    // let lastTransactionAmt = transactionData.data.slice(-1)[0].transactionAmt;
    

    console.log(uName);
    console.log(cardData.data[0]);
    console.log(cardNumber);
    // console.log(transactionData.data.slice(-1)[0]);
    console.log("Card Number: " + cardNumber);
    console.log("Credit Balance: " + creditBalance);
    console.log("Credit Limit: " + creditLimit);
    // console.log("Last Transaction ID: " + lastTransactionId);
    // console.log("Last Transaction Amount: " + lastTransactionAmt);
  }
  loadCards();

  return (
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
  );
}
