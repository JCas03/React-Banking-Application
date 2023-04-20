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
import { useState, react, useEffect } from "react";
import "./css/AccountServices.css";
import { useAuth0 } from "@auth0/auth0-react";
import UserService from "../services/UserService";

function createData(store, amount, address, date) {
  return { store, amount, address, date };
}

const rows = [
  createData("Walmart", 200.0, "123 Walmart ave.", "10-21-2023"),
  createData("Costco", 150.0, "123 Costco Ln.", "09-08-2023"),
  createData("Louis Vutton", 600.0, "123 Louis Vutton Blv.", "08-16-2023"),
];
export default function AccountServices() {
  const [accData, setAccData] = useState(null);
  const { user, isAuthenticated, isLoading } = useAuth0();
  const [uName, setUName] = useState("");
  const [accNum, setAccNum] = useState(null);

  useEffect(() => {
    UserService.getUserByEmail(user.email)
      .then((res) => res.data)
      .then((data) => setUName(data.userName));
  }, [user.email]);
  
  useEffect(() => {
    AccountService.getAllAccountsByUsername(uName)
      .then((res) => res.data)
      .then((data) => setAccNum(data[0].accountNumber));
  }, [uName]);
  
  useEffect(() => {
    if (accNum) {
      AccountService.getAllAccountsByAccountNumber(accNum).then((res) =>
        setAccData(res)
      );
    }
  }, [accNum]);
  
  
  if (uName && accNum && accData) {
    console.log(uName);
    console.log(accNum);
    console.log(accData);
  }

  //   // const transactionData = await AccountService.viewAllTransactionsOnAccount(
  //   //   accNum
  //   // );
  //   // let latestTransaction = transactionData.data.slice(-1)[0];
  //   // let secLatestTransaction = transactionData.data.slice(1)[0];
  //   // let thirdLatestTransaction = transactionData.data.slice(0)[0];

  //   // // console.log(transactionData.data);
  //   // // console.log(latestTransaction);
  //   // // console.log(latestTransaction.accountNumber)
  //   // // console.log(secLatestTransaction);
  //   // // console.log(thirdLatestTransaction);
  // };

  return (
    <div>
      <Box>
        <Box textAlign="center" mb={4}>
          <Typography variant="h2" style={{color: '#cfd8dc'}}>All Accounts</Typography>
        </Box>
        <Grid container spacing={2}>
          {accData && accData.data?.map((user) => (
            <Grid item xs={6} key={user.accountName}>
              <Card className="accountCard">
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
                <Link
                  className="tlink"
                  underline="hover"
                  href="/all-transactions"
                >
                  See all Transactions
                </Link>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
}
