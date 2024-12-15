import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Buttons from './ui/Buttons';
import CheckboxMenu from './ui/Checkbox';

export default function MenuCard() {

    const card = (
        <React.Fragment>
            <Box sx={{ padding: '20px 20px 0', }}>
                <Buttons />
            </Box>
            <Box sx={{ padding: '0 20px 20px' }}>
                <CheckboxMenu />
            </Box>
        </React.Fragment>
    );

    return (
        <Card sx={{ minWidth: '300px' }}>{card}</Card>
    );
}