import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from '@mui/material';
import CustomThemeProvider from "../src/theme/Theme";
import { Box } from '@mui/system';
import Centered from "./components/Centered";
import Contact from "./pages/Contact";
function App() {
  return (
      <CustomThemeProvider>
        <Centered>
          <div>
      <Button variant = "contained"
      sx = {{
        marginTop:5,
      }}
      >Hello World</Button>
      <Contact/>
      </div>
      </Centered>

      </CustomThemeProvider>
      
  );
}

export default App;
