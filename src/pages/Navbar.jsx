import React from 'react';
import {AppBar,Box,Typography,styled,useTheme,useMediaQuery} from "@mui/material";
import img from "../image/image.png"
import Dropdown from './Dropdown';
import Drawercomp from "./Drawer";
import { Link } from 'react-router-dom';

const Appbardiv = styled(AppBar)`
background-color:white;
text-decoration:none;
height:10vh;
`

const Navbar = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down("md"))
  return (
  <Box position="static">
  <Appbardiv>
   <Box sx={{margin:"auto",display:"flex",justifyContent:"space-between",width:"80%"}}>
    <Box>
    <img src={img} alt="" height="40%"  />
    </Box>
    <Box sx={{display:"flex",gap:"20px",padding:"18px"}}>
        {
            isMatch  ? (
                <Drawercomp/>
            ):(
                <>
                <Link  to="/" sx={{TextDecoder:"none"}}><Typography sx={{color:"#800080"}}>My Assignment</Typography></Link>
                <Link to="/main"> <Typography sx={{color:"#800080"}}>Chat With Friend</Typography></Link>
                <div style={{marginTop:"-50px"}}>
                    <Dropdown/>
                </div>
                </>

            )
        }
  
    
    </Box>
  
   </Box>
  
  </Appbardiv>


  
  
  </Box>
  )
}

export default Navbar
