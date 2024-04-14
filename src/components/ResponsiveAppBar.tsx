import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import logo from "../logo.png";
import Box from '@mui/material/Box';

const pages = ['About', 'Contact', 'Sign In'];

function ResponsiveAppBar() {
  const handleCloseNavMenu = () => {};

  return (
    <AppBar position="sticky">
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'space-between' }} disableGutters>
          <img src={logo} alt="logo" style={{ width: "70px", height: "70px" }} />

          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default ResponsiveAppBar;
