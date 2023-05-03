import React, { useState } from "react";
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
import AccountBalanceIcon from "@mui/icons-material/AccountBalance";
import DrawerComp from "./Drawer";
import { useAuth0 } from "@auth0/auth0-react";
import "./ResponsiveAppBar.css";
import { TabContext, TabList, TabPanel } from "@mui/lab";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <Button
      onClick={() => loginWithRedirect()}
      sx={{ marginLeft: "auto" }}
      variant="contained"
    >
      Log In
    </Button>
  );
};
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <Button
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
      sx={{ marginLeft: "10px" }}
      variant="contained"
    >
      Log Out
    </Button>
  );
};

const Header = () => {
  const { user } = useAuth0();
  const [value, setValue] = useState(user ? "/" : "/contact"); // updated
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TabContext value={value}>
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
              <TabList
                sx={{ marginLeft: "auto" }}
                indicatorColor="secondary"
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
              >
                {user ? (
                  <>
                    <Tab label="Home" value="/" href="/" />
                    <Tab
                      label="Account Services"
                      value="/account-services"
                      href="/account-services"
                    />
                    <Tab
                      label="Card Services"
                      value="/card-services"
                      href="/card-services"
                    />
                    <Tab
                      label="Transfer Funds"
                      value="/transfer-funds"
                      href="/transfer-funds"
                    />
                    <Tab
                      label="Fund Services"
                      value="/fund-services"
                      href="/fund-services"
                    />
                    <Tab
                      label="Profile"
                      value="/profile"
                      href="/profile"
                    />
                  </>
                ) : null}
                <Tab label="Contact Us" value="/contact" href="/contact" />
              </TabList>
              {user ? <LogoutButton /> : <LoginButton />}
            </>
          )}
        </Toolbar>
      </AppBar>
    </TabContext>
  );
};

export default Header;
