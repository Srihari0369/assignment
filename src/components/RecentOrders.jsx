import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Avatar } from '@mui/material';

const rows = [
  { id: 1, customer: 'Wade Warren', orderNo: 15478256, amount: 124.00, status: 'Delivered', avatar: 'https://i.pravatar.cc/300' },
  { id: 2, customer: 'Jane Cooper', orderNo: 48965786, amount: 385.02, status: 'Delivered', avatar: 'https://i.pravatar.cc/300' },
  { id: 3, customer: 'Guy Hawkins', orderNo: 78958215, amount: 45.88, status: 'Cancelled', avatar: 'https://i.pravatar.cc/300' },
  { id: 4, customer: 'Kristin Watson', orderNo: 20965732, amount: 65.00, status: 'Pending', avatar: 'https://i.pravatar.cc/300' },
  { id: 5, customer: 'Cody Fisher', orderNo: 95715620, amount: 545.00, status: 'Delivered', avatar: 'https://i.pravatar.cc/300' },
  { id: 6, customer: 'Savannah Nguyen', orderNo: 78514568, amount: 128.20, status: 'Delivered', avatar: 'https://i.pravatar.cc/300' },
];

const RecentOrders = () => {
  return (
    <TableContainer component={Paper} >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Customer</TableCell>
            <TableCell>Order No.</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>
                <Avatar alt={row.customer} src={row.avatar} /> {row.customer}
              </TableCell>
              <TableCell>{row.orderNo}</TableCell>
              <TableCell>${row.amount.toFixed(2)}</TableCell>
              <TableCell>{row.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RecentOrders;
