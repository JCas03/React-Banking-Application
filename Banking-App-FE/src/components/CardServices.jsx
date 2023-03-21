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

  // useEffect( () => {
  //   const {user} = useAuth0();
    
  // }, []);

  const loadCards = async()=> {
    const userRes = await UserService.getUserByEmail(user.email);
    const result = await CardService.getCardsByUsername(user.name);
    const uName = user.name
    console.log(userRes.data.username);
    const users = userRes.map(u =>
      <div>
        <p>{u.id}</p>
        <p>{u.name}</p>
        <p>{u.email}</p>
      </div>
      )
    console.log(result.data);
  }
  loadCards();

  return (
    <Box>
      <Grid container spacing = {2}>
        <Grid item xs={6}>
          <Card sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                CreditCard Name
                {this.users}
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