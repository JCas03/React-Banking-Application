import { Card, CardContent, Grid, Link, SvgIcon, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import './css/AccountServices.css'
function createData(store, amount, address, date) {
  return { store, amount, address, date };
}
const rows = [
  createData("Walmart", 200.0, "123 Walmart ave.", "10-21-2023"),
  createData("Costco", 150.0, "123 Costco Ln.", "09-08-2023"),
  createData("Louis Vutton", 600.0, "123 Louis Vutton Blv.", "08-16-2023"),
];
export default function AccountService() {
  return (
    <div>
    <Box >
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Card className="accountCard">
            <CardContent>
              <Typography className="maintext"  align="left" variant="h2" component="div">
                Checkings Account
              </Typography>
              <Typography className="maintext" gutterBottom align="left" variant="h3">
                $9999.99
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
              <Link className="tlink" underline="hover" href="/checkings-transactions">See all Transactions</Link>
          </Card>
        </Grid>

        <Grid item xs={6}>
          <Card className="accountCard">
            <CardContent>
              <Typography className="maintext" align="left" variant="h2" component="div">
                Savings Account
              </Typography>
              <Typography className="maintext" gutterBottom align="left" variant="h3">
                $9999.99
              </Typography>
              <TableContainer component={Paper}>
                <Table >
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
            <Link className="tlink" underline="hover" href="/savings-transactions">See all Transactions</Link>
          </Card>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}
