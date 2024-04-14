import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Box from '@mui/material/Box';
import image1 from "../images/image1.jpg";
import { Button, Typography } from "@mui/material";
import { GifBoxTwoTone } from "@mui/icons-material";
import Footer from "../components/Footer";

const LandingPage = () =>{
    return(
        <>
        <ResponsiveAppBar/>
        <Box display="flex" alignItems="center">
        <Box display="flex" justifyContent="space-between" alignItems="left" flexDirection="column">
            <Typography variant = "h2" align = "center" color = "primary" mt = {5}>
                FOA - Food for all
            </Typography>
            <Typography variant = "h4" color = "primary" mt = {5} marginLeft={3}>
         Provide food to the less fortunate and bring a smile to someone's face.
            </Typography>
            <Box display="flex" justifyContent="center"> 
                        <Button variant="contained" size='large' sx={{ my: 10, color: 'white', width: 'fit-content' }}>Sign Up</Button>
                    </Box>
                      </Box>
          
      <Box  
      height={500}
      width={500}
      my={4}
      display="flex"
      alignItems="right"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <img src={image1} alt="feeding the hungry" style={{ width: "500px", height: "500px" }}/>
    </Box>
    </Box>
    <Footer/>
  
        </>
        
    );
}
export default LandingPage;