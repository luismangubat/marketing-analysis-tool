import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';

// Generate Order Data
function createData(id, date, name, shipTo, paymentMethod, amount) {
  return { id, date, name, shipTo, paymentMethod, amount };
}

var rows = [];
fetch('https://localhost:8080/products/2', {
    method: 'GET'
  }).then((response) => {
    rows = response.data;
    console.log(rows);
  });

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

export default function SellerAnalysis() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Title>Seller Analysis</Title>
      <Table size="small">
        <TableHead>
          <TableRow>
            <TableCell>Seller Name</TableCell>
            <TableCell>Average Rating</TableCell>
            <TableCell>Total Sales</TableCell>
            <TableCell>Total Products</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.sellername}>
              <TableCell>{row.productrating}</TableCell>
              <TableCell>{row.totalsales}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </React.Fragment>
  );
}

