import { ThemeProvider as MuiThemeProvider, createTheme } from "@mui/material";
import React from "react";

const theme = createTheme({
    palette:{
        primary:{
            main: "#34495E",
        },
    },
});

interface ThemeProps{
    children:React.ReactNode;
}

const CustomThemeProvider = ({children}:ThemeProps) =>{
    return(
        <MuiThemeProvider theme = {theme}>
            {children}
        </MuiThemeProvider>
    );
}

export default CustomThemeProvider;