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
import { useAuth0 } from "@auth0/auth0-react";
import UserService from "../services/UserService";

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
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [uName, setUName] = useState("Loading...");

  const loadAccounts = async () => {

    const resData = await UserService.getUserByEmail(user.email)
    setUName(resData.data.userName)

    let pullAccNum = await AccountService.getAllAccountsByUsername(uName);
    console.log(pullAccNum.data);
    console.log(pullAccNum.data[0].accountNumber);
    let accNum = pullAccNum.data[0].accountNumber;
    
    
    let accsData = await AccountService.getAllAccountsByAccountNumber(accNum);
    setAccData(accsData);
    console.log(accData);

    console.log(uName);

  
    
  
  
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