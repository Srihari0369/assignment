import React from 'react';
import { Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import { Star as StarIcon } from '@mui/icons-material';

const feedback = [
    {
        customer: 'Jenny Wilson',
        rating: 5,
        comment: 'The food was excellent and so was the service.',
        avatar: 'path/to/avatar1.jpg'
    },
    {
        customer: 'Dianne Russell',
        rating: 4,
        comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread.',
        avatar: 'path/to/avatar2.jpg'
    },
    {
        customer: 'Jenny Wilson',
        rating: 5,
        comment: 'The food was excellent and so was the service.',
        avatar: 'path/to/avatar1.jpg'
    },
    {
        customer: 'Dianne Russell',
        rating: 4,
        comment: 'We enjoyed the Eggs Benedict served on homemade focaccia bread.',
        avatar: 'path/to/avatar2.jpg'
    },
   
    
    // Add more feedback as needed
];

const CustomerFeedback = () => {
    return (
        <Box>
            {feedback.map((item, index) => (
                <Card key={index}>
                    <CardContent>
                        <Box display="flex" alignItems="center">
                            <Avatar src={item.avatar} />
                            <Box ml={2}>
                                <Typography variant="h6">{item.customer}</Typography>
                                <Box display="flex">
                                    {Array.from({ length: item.rating }, (_, i) => (
                                        <StarIcon key={i} color="primary" />
                                    ))}
                                </Box>
                            </Box>
                        </Box>
                        <Typography variant="body2">{item.comment}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default CustomerFeedback;
