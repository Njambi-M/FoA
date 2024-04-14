import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import CustomThemeProvider from "../src/theme/Theme";
import { Box } from '@mui/system';
import Centered from "./components/Centered";
import Contact from "./pages/Contact";
import ResponsiveAppBar from './components/ResponsiveAppBar';
import LandingPage from './pages/LandingPage';
function App() {
  return (
      <CustomThemeProvider>
        <LandingPage/>
        {/* <Centered>
          <div>
      <Button variant = "contained"
      sx = {{
        marginTop:5,
      }}
      >Hello World</Button>
      <Contact/>
      </div>
      </Centered> */}

      </CustomThemeProvider>
      
  );
}

export default App;
