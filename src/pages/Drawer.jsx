import { List,Drawer, ListItemButton, ListItemIcon, ListItemText, IconButton, Box, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import "./drawer.css"

const Drawercomp = () => {
    const [opendrawer,setopendrawer] = useState(false);
    const navigate = useNavigate()
const assignment = () => {
    navigate("/")
}
const mentor = () => {
    navigate("/main")
}


  return (
   <React.Fragment >
    
    <Drawer  open={opendrawer} onClose ={() => setopendrawer(false)} >
    <Box className="drawer">
        <List >
           
                    <ListItemButton  onClick = {() => setopendrawer(false)} >
                        
                    <ListItemIcon sx={{display:"flex",flexDirection:"column",gap:"2rem" ,marginTop:"2rem"}}>
                    
                        <ListItemText sx={{color:"aliceblue",fontWeight:900,fontSize:"15px"}} onClick={assignment}>My Assigment</ListItemText>
                        <ListItemText sx={{color:"aliceblue",fontWeight:900,fontSize:"15px"}}  onClick={mentor}>Chat with mentor</ListItemText>
                      
                      
                    </ListItemIcon>
                </ListItemButton>
           
    
           
        </List>
        </Box>
    </Drawer>
    <IconButton onClick={() => setopendrawer(!opendrawer)} sx={{color:"white",marginLeft:"auto"}}>
      <button style= {{color:"black",marginTop:"-100px"}}>ProfileName</button>
    </IconButton>
   
   </React.Fragment>
  )
}

export default Drawercomp