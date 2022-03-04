import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

const URL = 'http://localhost:3000'

export default function BasicTable() {

  const [listings, setListings] = React.useState([]);
  
  axios.get(`${URL}/listings/`)
    .then(res => {
        setListings(() => {
            return res.data.map((listing) => ({
                ...listing,
                branches: listing.branches.map((branch, index) => `${branch} `),
                courses: listing.courses.map((course, index) => (course + "\n"))
            }))
        })
    })
    .catch(err => console.log(err.message));

  return (
        <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
            <TableRow>
                <TableCell  padding="normal" scope='string' align='center'>Title</TableCell>
                <TableCell padding="normal" scope='string' align='center'>Seller ID</TableCell>
                <TableCell padding="normal" scope='string' align='center'>Branches</TableCell>
                <TableCell padding="normal" scope='string' align='center'>Courses</TableCell>
                <TableCell padding="normal" scope='string' align='center'>Price</TableCell>
            </TableRow>
            </TableHead>
            <TableBody>
            {listings.map((row) => (
                <TableRow
                key={row.title}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                <TableCell component="th" scope="row" padding="normal" align='center'>
                    {row.title}
                </TableCell>
                <TableCell padding="normal" scope='string' align='center'>{row.sellerId}</TableCell>
                <TableCell padding="normal" scope='string' align='center'>{row.branches}</TableCell>
                <TableCell padding="normal" scope='string' align='center'>{row.courses}</TableCell>
                <TableCell padding="normal" scope='string' align='center'>{row.price}</TableCell>
                </TableRow>
            ))}
            </TableBody>
        </Table>
        </TableContainer>
        
  );
}
