
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Grid, Typography, CardActions } from "@mui/material";
import { Box, Container } from "@mui/system";
import Button from '@mui/material/Button';
import axios from 'axios';

export default function CardServices() {

  const [cards, setCards] = useState([])

  useEffect(() => {
    loadCards();
  }, []);

  const loadCards = async()=> { 
    const result = await axios.get("http://localhost:8080/userms/admin/users")
    console.log(result.data);
  }


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