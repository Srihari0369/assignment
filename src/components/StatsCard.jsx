import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const StatsCard = ({ title, value, growth }) => {
    return (
        <Card >
            <CardContent>
                <Typography variant="h6">{title}</Typography>
                <Typography variant="h4">{value}</Typography>
                <Typography color="textSecondary">{growth}</Typography>
            </CardContent>
        </Card>
    );
};

export default StatsCard;
