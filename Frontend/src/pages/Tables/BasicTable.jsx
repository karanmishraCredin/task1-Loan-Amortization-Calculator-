import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useMain } from '../../context/MainProvider';
import { useEffect } from 'react';



export default function BasicTable() {
    const { state, setState } = useMain()
    useEffect(() => {
        console.log("state in table-> ", state)
    }, [state])
    return (
        <>
            {
                state?.schedule?.length > 0 ?
                    <TableContainer sx={{ overflow: 'scroll', height: '90vh' }} component={Paper}>
                        <Table sx={{ minWidth: 650, overflow: 'scroll' }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="right">interestPaid </TableCell>
                                    <TableCell align="right">paymentNumber</TableCell>
                                    <TableCell align="right">principalPaid</TableCell>
                                    <TableCell align="right">remainingBalance</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {state?.schedule?.map((row) => (
                                    <TableRow
                                        key={row.interestPaid + Date.now()}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell align="right">{row.interestPaid}</TableCell>
                                        <TableCell align="right">{row.paymentNumber}</TableCell>
                                        <TableCell align="right">{row.principalPaid}</TableCell>
                                        <TableCell align="right">{row.remainingBalance}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    : <h1 style={{color:'black'}} >No Data Found !</h1>}
        </>

    );
}
