import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


export default function BasicTable() {
    const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get('http://localhost:5000/api/wedding/v1/guests-attends');
            setData(response.data.data);
        };

        fetchData();
    }, []); // Run once after the initial render
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 100 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell> Kehadiran </TableCell>
                        <TableCell align="right">Jumlah</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((row) => (
                        <TableRow
                            style={{ textAlign: 'center' }}
                        >
                            <TableCell component="th" scope="row">
                                {row.status}
                            </TableCell>
                            <TableCell align="right">{row.count}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer >
    );
}