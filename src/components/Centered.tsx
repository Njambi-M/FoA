import {Box } from '@mui/material';
import React from 'react';

interface CenteredProps{
    children:React.ReactNode;
}

const Centered =({children}:CenteredProps) =>{
    return (
        <Box textAlign="center" >
            {children}
        </Box>
    );

}
export default Centered;