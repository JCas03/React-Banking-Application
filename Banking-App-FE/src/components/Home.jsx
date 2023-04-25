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
import Clock from "./Clock";

function Copyright() {
  return (
    <Typography variant="body2" color="#cfd8dc" align="center">
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
  // const [uName, setUname] = useState("Loading....");
  // const [cardNumber, setCardNumber] = useState("Loading....")
  // const [creditBalance, setCreditBalance] = useState("Loading....")
  // const [creditLimit, setCreditLimit] = useState("Loading....")

const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();
  const getUserData = async () => {
    const resData = await UserService.getUserByEmail(user.email)
    setUname(resData.data.userName)

    const cardData = await CardService.getCardsByUsername(uName)
    setCardNumber(cardData.data[0].cardNumber);
    setCreditBalance(cardData.data[0].creditBalance);
    setCreditLimit(cardData.data[0].creditLimit);
    const userRes = await UserService.getUserByEmail(user.email);
    console.log(userRes.data);
  }
  getUserData();
  
  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isAuthenticated) {
    return (
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="#cfd8dc"
        gutterBottom
      >
        Welcome, {user.name}
      </Typography>
    );
  } else {
    return (
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="#cfd8dc"
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



export default function Album() {
  const {user} = useAuth0();
  const classes = useStyles();


  if (typeof(user) == "undefined"){
    return (
      <React.Fragment>
        <main>
          {/* Hero unit */}
          <div className={classes.heroContent}>
            <Container maxWidth="sm">
              <Profile />
            </Container>
          </div>
          <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          <Clock />
        </Typography>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom></Typography>
  
          <Typography
            variant="subtitle1"
            align="center"
            color="#cfd8dc"
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
  else{
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
          <Typography
          component="h1"
          variant="h2"
          align="center"
          color="textPrimary"
          gutterBottom
        >
          <Clock />
        </Typography>
        </main>
        {/* Footer */}
        <footer className={classes.footer}>
          <Typography variant="h6" align="center" gutterBottom></Typography>
  
          <Typography
            variant="subtitle1"
            align="center"
            color="#cfd8dc"
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
}
