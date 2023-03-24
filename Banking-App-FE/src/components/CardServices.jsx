import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, CardActions } from "@mui/material";
import { Box, Container } from "@mui/system";
import Button from '@mui/material/Button';
import axios from 'axios';
import CardService from "../services/CardService";
import UserService from '../services/UserService';
import { useAuth0 } from '@auth0/auth0-react';


export default function CardServices() {

  const {user} = useAuth0();
  const [cards, setCards] = useState([])
  const [emailData, setEmailData] = useState([])
  const [cardData, setCardData] = useState([])
  

  // useEffect( () => {
  //   const {user} = useAuth0();
    
  // }, []);

  const loadCards = async() => {
    const resData = await UserService.getUserByEmail(user.email)
    let uName = resData.data.userName;

    await CardService.getCardsByUsername(uName).then((cardData) => setCardData(cardData));
    // let cardNumber = cardData.data[0].cardNumber;
    // let creditBalance = cardData.data[0].creditBalance;
    // let creditLimit = cardData.data[0].creditLimit;
    
    // const transactionData = await CardService.viewCardTransactions(cardNumber)
    // let lastTransactionId = transactionData.data.slice(-1)[0].transactionId;
    // let lastTransactionAmt = transactionData.data.slice(-1)[0].transactionAmt;
    

    // console.log(resData.data.userName);
    console.log(cardData.data[0].cardNumber);
    // console.log(cardNumber);
    // console.log(transactionData.data.slice(-1)[0]);
    // console.log("Card Number: " + cardNumber);
    // console.log("Credit Balance: " + creditBalance);
    // console.log("Credit Limit: " + creditLimit);
    // console.log("Last Transaction ID: " + lastTransactionId);
    // console.log("Last Transaction Amount: " + lastTransactionAmt);
    // setEmailData();
    // console.log(emailData);
    // emailData.Object.map((emailData)=>{
    //   userName = emailData.userName
    // })
    // console.log(userName);
    // const result = await CardService.getCardsByUsername(emailData.userName);
    // const uName = user.name
    // console.log(result.data);
  }
  useEffect( () => {
    loadCards();
  }, []);
  

  return (
    <Box>
      <Grid container spacing = {2}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                CreditCard Name
              </Typography>
              <Typography variant="h5" component="div">
                {cardData.data[0].cardNumber}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
                Credit Balance
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
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
