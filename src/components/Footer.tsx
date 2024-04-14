import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IconButton, TextField, Typography} from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
function Footer() {
    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
    };
  return (
    <AppBar position="static" color="primary">
            <Box display="flex" alignItems="centre" flexDirection={'column'} sx={{ml:10}} >
                <Box marginBottom={5} marginTop={5} alignItems="center">
                    <Typography variant="body1" color="inherit">
                        © FOA 2024
                    </Typography>
                <Box display="flex" sx={{mt:10}}> 
                <Typography sx={{mt:1, mr:3}}>
                        Send us a message
                    </Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                    <TextField
                        type="email"
                        label="Your Email"
                        id="filled-basic"
                        variant="filled"
                        size="small"
                        margin="dense"
                        required
                        color='secondary'
                        sx={{mr: 3}}
                    />
                    <TextField
                        label="Message"
                        id="filled-basic"
                        variant="filled"
                        multiline
                        rows={1}
                        size="small"
                        margin="dense"
                        required
                        color='secondary'
                    />
                    <Button type="submit" variant="contained" color="secondary" size="small" style={{ marginLeft: '10px' }}>
                        Send
                    </Button>
                </form>

                </Box>
                
                <Box sx={{mt:5}}>
                    <Typography sx={{mt:1}}>
                        Follow us on:
                    </Typography>
                    <IconButton color="inherit" href="#">
                        <InstagramIcon />
                    </IconButton>
                    <IconButton color="inherit" href="#">
                        <WhatsAppIcon />
                    </IconButton>
                </Box>
                </Box>
            </Box>
        </AppBar>
  );
}

export default Footer;
