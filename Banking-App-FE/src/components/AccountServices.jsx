import {
  Card,
  CardContent,
  Grid,
  Link,
  SvgIcon,
  Typography,
} from "@mui/material";
import { Box, Container } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "./css/AccountServices.css";
import AccountService from "../services/AccountService";
import { useState, react } from "react";
import AppointmentPopup from "./AppointmentPopup";
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { StaticDateTimePicker } from '@mui/x-date-pickers/StaticDateTimePicker';
import dayjs from 'dayjs';
import TextField from '@mui/material/TextField';
import './css/AccountServices.css'


function createData(store, amount, address, date) {
  return { store, amount, address, date };
}
export function accClearState() {
  setAccData();
  console.log(accData);
  console.log("The State has been cleared");
}

const rows = [
  createData("Walmart", 200.0, "123 Walmart ave.", "10-21-2023"),
  createData("Costco", 150.0, "123 Costco Ln.", "09-08-2023"),
  createData("Louis Vutton", 600.0, "123 Louis Vutton Blv.", "08-16-2023"),
];
export default function AccountServices() {
  const [accData, setAccData] = useState("Loading...");
  const [buttonPopup, setButtonPopup] = useState(false);
  const [date, setDate] = useState(null);

  const loadAccounts = async () => {
    let accNum = 13;
    let accsData = await AccountService.getAllAccountsByAccountNumber(accNum);
    setAccData(accsData);
    console.log(accData);

    
  
  
    const transactionData = await AccountService.viewAllTransactionsOnAccount(
      accNum
    );
    let latestTransaction = transactionData.data.slice(-1)[0];
    let secLatestTransaction = transactionData.data.slice(1)[0];
    let thirdLatestTransaction = transactionData.data.slice(0)[0];

    // console.log(transactionData.data);
    // console.log(latestTransaction);
    // console.log(latestTransaction.accountNumber)
    // console.log(secLatestTransaction);
    // console.log(thirdLatestTransaction);
  };
  loadAccounts();


  return (
  
    <div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Button onClick={() => setButtonPopup(true)}>Schedule Appointment</Button>
        <AppointmentPopup trigger={buttonPopup} setTrigger={setButtonPopup}>
          <h3>Appointment Scheduler</h3>
          <p>Please select a date for your appointment</p>
          <DemoContainer
        components={[
          'DateTimePicker',
          'MobileDateTimePicker',
          'DesktopDateTimePicker',
          'StaticDateTimePicker',
        ]}
      >
        <DemoItem>
          <StaticDateTimePicker defaultValue={dayjs('2022-04-17T15:30')} />
        </DemoItem>
      </DemoContainer>
          <br></br>
          <TextField
          id="outlined-textarea"
          label="Reason for Appointment"
          placeholder="Enter details"
          multiline
          margin="normal"
        />
        </AppointmentPopup>
      </LocalizationProvider>
      <Box>
        {/* <Grid container spacing={2}>
          <Grid item xs={6}> */}
        <Card className="accountCard">
          {accData.data?.map((user) => (
            <CardContent>
              <Typography
                className="maintext"
                align="left"
                variant="h2"
                component="div"
                alt="Loading..."
              >
                {user.accountName}
              </Typography>
              <Typography
                className="maintext"
                gutterBottom
                align="left"
                variant="h3"
                alt="Loading..."
              >
                ${user.availableBalance}
              </Typography>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Recent Transactions</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell align="right">Location</TableCell>
                      <TableCell align="right">Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.map((row) => (
                      <TableRow key={row.store}>
                        <TableCell component="th" scope="row">
                          {row.store}
                        </TableCell>
                        <TableCell align="right">{row.amount}</TableCell>
                        <TableCell align="right">{row.address}</TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          ))}
          <Link className="tlink" underline="hover" href="/all-transactions">
            See all Transactions
          </Link>
        </Card>
        {/* </Grid>
        </Grid> */}
      </Box>
    </div>
  );
}
