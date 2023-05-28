import { Box } from '@mui/material'
import React from 'react';
import "./main.css";
import Groups2Icon from '@mui/icons-material/Groups2';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';

const Main = () => {
  return (
 <Box sx= {{margin:"auto",width:"80%"}}>
    <h4>{"UI/UX > REfer & Earn"}</h4>
    <Box>
        <Box className ="refer" sx={{display:"flex",justifyContent:"space-between"}}>
        <Box sx={{display:"flex",flexDirection:"column"}}>
            <Box sx ={{display:"flex",gap:"10px"}}>
               
                <Box><p style={{fontSize:"30px",color:"#800080"}}>Referal Earning</p>
                <p style={{fontSize:"30px"}}>₹ 2500</p></Box>
                <Box >
                    <p style={{fontSize:"30px",color:"#800080"}}>Total Refferals</p>
                    <p style={{fontSize:"30px"}}>7</p>
                </Box>
                <Box>
                <p style={{fontSize:"30px",color:"#800080"}}>Wallet Balance</p>
                    <p style={{fontSize:"30px"}}>₹ 500</p>
                </Box>
            </Box>
            <Box><button  style={{marginLeft:"175px",height:"50px",borderRadius:"10px",background:"#800080",color:"white"}}><p >Withdrawal Balance</p> </button></Box>
            </Box>
            <Box>
                <h3 style ={{fontSize:"30px",color:"#800080"}}>Your Referrals Code</h3>
                <Box sx={{border:"1px solid black",height:"30px"}}><h3 style={{margin:"7px 25px"}}>E D C H 5 4</h3></Box>
            </Box>
        </Box>

    </Box>
    <Box>
        <h1>How does it work</h1>
        <Box className ="container">
            <Box sx={{display:"flex",gap:"20px"}}>
                <Box > <Groups2Icon sx={{background:"orange",marginTop:"20px",width:"50px",height:"40px"}}/> </Box>
                <Box> <h4>invite your friend</h4>
                <p style={{marginTop:"-10px"}}>Share the link tutedude.com with <br/> your friends</p></Box>
            </Box>
            <Box sx={{display:"flex",gap:"20px"}}>
                <Box> <ShoppingBagIcon sx={{background:"orange",marginTop:"20px",width:"50px",height:"40px"}}/>  </Box>
                <Box> <h4>Friend purchase any cource</h4>
                <p>Using your Referrals code in the payments page</p></Box>
            </Box>
            <Box sx={{display:"flex",gap:"20px"}}>
                <Box> <p style={{background:"orange",marginTop:"20px",width:"50px",height:"40px"}}>₹</p></Box>
                <Box> <h4>You get ₹ 200 as a referral money </h4>
                <p>on total purchase the friend makes into your wallet</p></Box>
            </Box>
            <Box sx={{display:"flex",gap:"20px"}}>
                <Box> <img style={{background:"orange",marginTop:"20px",width:"50px",height:"40px"}} src="data:image/jpeg;base64,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" alt="" /></Box>
                <Box> <h4>Your friend get ₹ 200 off</h4>
                <p>on his overall fees on succesfull purchase using your refferal code</p></Box>
            </Box>
            <Box sx={{display:"flex",gap:"20px"}}>
                <Box> <AccountBalanceWalletIcon sx={{background:"orange",marginTop:"20px",width:"50px",height:"40px"}}/></Box>
                <Box> <h4>Transfer money from wallet</h4>
                <p>When the wallet balance reaches ₹ 200 or more,you can withdraw it</p></Box>
            </Box>
        </Box>
    </Box>
    <h3 style={{color:"#800080"}}>Friend who enroll</h3>
    <h3 style={{color:"#800080"}}>Term & condition</h3>
 </Box>
  )
}

export default Main
