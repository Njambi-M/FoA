import React, {useState} from "react";
import { Button, TextField, Box} from "@mui/material";



const Contact = () =>{
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [myForm, setMyForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
      });

    const saveFields = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMyForm((previous) => ({
          ...previous,
          [event.target.name]: event.target.value,
        }));
      };

    return( 
        <Box component ="form" sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' }, 
            gap:2,
            display: "flex",
            flexDirection: "column",
          }}
          noValidate
          autoComplete="off">
            <div>
            <TextField required id ="outlined-basic" label="First name" variant="outlined" onChange={saveFields}/>
            <TextField required id ="outlined-basic" label="Last name" variant="outlined"/>
            <TextField required id ="outlined-basic" label="Email address" variant="outlined"/>
            <Button variant = "contained">Submit</Button>
            </div>
    </Box>

    );
}

export default Contact;
