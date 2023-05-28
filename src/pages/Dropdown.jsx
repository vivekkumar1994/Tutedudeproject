import React, { useState } from 'react';
import {Box,Typography,TextField,MenuItem} from "@mui/material";

const Dropdown = () => {
    const [profile,setProfile] = useState();
    const options = ["ProfileName","About","Logout"]
  return (
    <Box>
        <Typography variant='h4' align='centre'>

            ProfileName
        </Typography>
        <Box>
            <TextField 
            value={profile}
            onChange={e => setProfile(e.target.ariaValueNow)}
            select
            SelectProps={{native:true,border:"none"}}
            >

            {
                options.map((data) =>(
                      <option value={data} key={data}>
                        {data}
                      </option>
                ))
            }
            </TextField>
           

        </Box>

      
    </Box>
  )
}

export default Dropdown
