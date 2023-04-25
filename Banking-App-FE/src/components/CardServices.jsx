import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Grid,
  Typography,
  CardActions,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import Button from "@material-ui/core/Button";
import axios from "axios";
import CardService from "../services/CardService";
import UserService from "../services/UserService";
import { useAuth0, User } from "@auth0/auth0-react";

export default function CardServices() {
  const [uName, setUName] = useState("Loading...");
  const [cardData, setCardData] = useState("Loading....");
  const { user } = useAuth0();

  useEffect(() => {
    const loadCards = async () => {
      const resData = await UserService.getUserByEmail(user.email);
      const cardData = await CardService.getCardsByUsername(resData.data.userName);
      setUName(resData.data.userName);
      setCardData(cardData);
    };
    loadCards();
  }, []);

  return (
      <Box>
        <Box textAlign="center" mb={4}>
          <Typography variant="h2" style={{ color: "#cfd8dc" }}>
            All Cards
          </Typography>
        </Box>
        <Grid container spacing={2}>
          {cardData.data?.map((card) => (
            <Grid item xs={6} key={card.cardNumber}>
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
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
  );
}
