import React, { useState } from 'react';
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';;
import DrawerComp from "./Drawer";
import { useAuth0 } from "@auth0/auth0-react";
import './ResponsiveAppBar.css';


const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <Button onClick={() => loginWithRedirect()} sx={{ marginLeft: "auto" }} variant="contained">Log In</Button>;
};
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })} sx={{ marginLeft: "10px" }} variant="contained">
      Log Out
    </Button>
  );
};


const Header = () => {
  const {user} = useAuth0();
  const [value, setValue] = useState();
  const theme = useTheme();
  console.log(theme);
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  console.log(isMatch);
  console.log(user)

  if (typeof(user) == "undefined"){
    return (
      <React.Fragment>
        <AppBar sx={{ background: "#063970" }}>
          <Toolbar>
            <AccountBalanceIcon sx={{ transform: "scale(2)" }} />
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  Banking
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <h1 className='signin'>Please Log In</h1>
                <LoginButton/>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
  }else{

    return (
      <React.Fragment>
        <AppBar sx={{ background: "#063970" }}>
          <Toolbar>
            <AccountBalanceIcon sx={{ transform: "scale(2)" }} />
            {isMatch ? (
              <>
                <Typography sx={{ fontSize: "2rem", paddingLeft: "10%" }}>
                  Banking
                </Typography>
                <DrawerComp />
              </>
            ) : (
              <>
                <Tabs
                  sx={{ marginLeft: "auto" }}
                  indicatorColor="secondary"
                  textColor="inherit"
                  value={value}
                  onChange={(e, value) => setValue(value)}
                >
                  <Tab label="Home" href= "/" />
                  <Tab label="Account Services" href="/account-services" />
                  <Tab label="Card Services" href="/card-services"/>
                  <Tab label="Contact" href="/contact" />
                </Tabs>
                
                <LogoutButton/>
              </>
            )}
          </Toolbar>
        </AppBar>
      </React.Fragment>
    );
            }
    

};

export default Header;