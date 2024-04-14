import ResponsiveAppBar from "../components/ResponsiveAppBar";
import Box from '@mui/material/Box';
import image1 from "../images/image1.jpg";
import { Button, Typography, CardActionArea, CardActions } from "@mui/material";
import { GifBoxTwoTone } from "@mui/icons-material";
import Footer from "../components/Footer";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import sdg2 from "../images/sdg2.png";
import sdg12 from "../images/sdg12.png";

const LandingPage = () =>{
    return(
        <>
        <ResponsiveAppBar/>
        <Box display="flex" alignItems="center">
        <Box display="flex" justifyContent="space-between" alignItems="left" flexDirection="column">
            <Typography variant = "h2" align = "center" color = "primary" mt = {5}>
                FoA - Food for all
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
    <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
      <Typography variant="h4" gutterBottom>
        Goals
      </Typography>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Card sx={{ maxWidth: 345, margin: 10, mr: 20 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image= {sdg2}
              alt="Sustainable Development Goal 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Sustainable Development Goal 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
            FoA aims to achieve the goal of zero hunger by providing food to the less fortunate.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card sx={{ maxWidth: 345, margin: 1 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="300"
              image={sdg12}
              alt="Sustainable Development Goal 12"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
              Sustainable Development Goal 12
              </Typography>
              <Typography variant="body2" color="text.secondary">
                FoA aims to achieve the goal of responsible consumption and production by reducing food wastage.
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Box>
    </Box>

    <Footer/>
  
        </>
        
    );
}
export default LandingPage;