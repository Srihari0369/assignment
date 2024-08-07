import React from 'react';
import { Grid, Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';
import StatsCard from './StatsCard';
import ActivityChart from './ActivityChart';
import RecentOrders from './RecentOrders';
import CustomerFeedback from './CustomerFeedback';
import {
    ShoppingCart as ShoppingCartIcon,
    LocalShipping as LocalShippingIcon,
    Cancel as CancelIcon,
    AttachMoney as AttachMoneyIcon
} from '@mui/icons-material';

const Dashboard = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box flexGrow={1}>
                <Header />
                <Grid container >
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard title="Total Orders" value="75" growth="3%" icon={<ShoppingCartIcon />} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard title="Total Delivered" value="70" growth="-3%" icon={<LocalShippingIcon />} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard title="Total Cancelled" value="5" growth="3%" icon={<CancelIcon />} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard title="Total Revenue" value="$12k" growth="-3%" icon={<AttachMoneyIcon />} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <StatsCard title="Total Revenue" value="$12k" growth="-3%" icon={<AttachMoneyIcon />} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <ActivityChart />                       
                    </Grid>                    
                    <Grid item xs={8} md={4}>
                        <RecentOrders /> 
                        <CustomerFeedback />                     
                    </Grid>                
                   
                </Grid>
            </Box>
        </Box>
    );
};

export default Dashboard;
