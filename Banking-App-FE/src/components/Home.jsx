import React, { useEffect } from "react";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import MaterialLink from "@material-ui/core/Link";
import { Link } from "react-router-dom";
import { grey } from "@mui/material/colors";
import { useAuth0 } from "@auth0/auth0-react";
import UserService from "../services/UserService";
import ReactModal from 'react-modal';
import { useState } from "react";
import AppointmentPopup from "./AppointmentPopup";
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <MaterialLink component={Link} to="/" color="inherit">
        Binary Bank
      </MaterialLink>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

// const newUser = await UserService.getUserByEmail(email);


const Profile = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const getUserData = async () => {
    const userRes = await UserService.getUserByEmail(user.email);
    console.log(userRes.data);
  }
  getUserData();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    return (
      <>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          Welcome, {user.name}
        </Typography>
      </>
    );
  } else {
    return (
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Please Sign In
      </Typography>
    );
  }
};

const useStyles = makeStyles((theme) => ({
  "@global": {
    a: {
      textDecoration: "none",
    },
  },
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: grey,

    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
  },
  cardMedia: {
    paddingTop: "56.25%", // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: grey,

    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4];

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Profile />
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Link to="/account-services">
                    <Button variant="contained" color="primary">
                      Account Dashboard
                    </Button>
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/card-services">
                    <Button variant="outlined" color="primary">
                      Credit Card Dashboard
                    </Button>
                  </Link>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item xs={6}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography
                      sx={{ fontSize: 12 }}
                      color="text.secondary"
                      gutterBottom
                    >
                      Current Balance
                    </Typography>
                    <Typography variant="h4" component="div">
                      $9xxx.xx
                    </Typography>
                    <Typography variant="body2">
                      Account - Number
                      <br />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small">View Account</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom></Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Thank you for choosing Binary Bank!
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
