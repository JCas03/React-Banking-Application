
import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import ResponsiveAppBar from "./components/Header/ResponsiveAppBar";
import Home from "./components/Home";
import Card from "./components/CardServices";
import Profile from "./components/ProfileService";
import AccountService from "./components/AccountServices";
import Contact from "./components/ContactPage";
import Transactions from "./components/Transactions";
import AppointmentDisplay from "./components/AppointmentDisplay";
import TransferFunds from "./components/TransferFunds"
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useAuth0 } from "@auth0/auth0-react";
import FundServices from "./components/FundServices";

function App() {
  const { user } = useAuth0();

  if (typeof user == "undefined") {
    return (
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/schedule-appointment"
              element={<AppointmentDisplay />}
            />
          </Routes>
        </LocalizationProvider>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <ResponsiveAppBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card-services" element={<Card />} />
            <Route path="/account-services" element={<AccountService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/all-transactions" element={<Transactions />} />
            <Route path="/profile" element={<Profile/>}/>
            <Route path="/transfer-funds" element={<TransferFunds/>}/>
            <Route path="/fund-services" element={<FundServices/>}/>
            <Route
              path="/schedule-appointment"
              element={<AppointmentDisplay />}
            />
          </Routes>
        </LocalizationProvider>
      </BrowserRouter>
    );
  }
}

export default App;
