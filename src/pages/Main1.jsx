import { Box } from "@mui/material";
import React from "react";
import "./main.css";

const Main1 = () => {
  return (
    <Box sx={{ margin: "auto", width: "80%" }}>
      <h4>{"UI/UX > REfer & Earn"}</h4>
      <Box className="referalcode" sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <h3 style={{ fontSize: "30px", color: "#800080" }}>
            Your Referrals Code
          </h3>
          <Box sx={{ border: "1px solid black", height: "30px" }}>
            <h3 style={{ margin: "7px 25px" }}>E D C H 5 4</h3>
          </Box>
        </Box>
        <Box>
          <h3 style={{ fontSize: "30px", color: "#800080" }}>Your Wallet</h3>
          <Box sx={{ border: "1px solid black", height: "30px" }}>
            <h3 style={{ margin: "7px 25px" }}> ₹ 500</h3>
          </Box>
        </Box>
      </Box>
      <Box >
        <h3>Friend who enroll(3)</h3>
        <Box className="container1">
          <Box className="enroll">
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <p>Dhiraj Saxsena</p>
              </Box>
              <Box>
                <p>14 feb 2022</p>
              </Box>
            </Box>
            <p>cource enroll(6)</p>
            <Box className="cource">
              <button>UI/UX</button>
              <button>Photoshop</button>
              <button>Illustrator</button>
              <button>Python</button>
              <button>Mern</button>
              <button>Java</button>
            </Box>
            <Box>Referal amount ₹ 185</Box>
          </Box>
          <Box className="enroll">
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <p>Subash Miahra</p>
              </Box>
              <Box>
                <p>15 sep 2022</p>
              </Box>
            </Box>
            <p>cource enroll(6)</p>
            <Box className="cource">
              <button>UI/UX</button>
              <button>Photoshop</button>
              <button>Illustrator</button>
              <button>Python</button>
              <button>Mern</button>
              <button>Java</button>
            </Box>
            <Box>Referal amount ₹ 290</Box>
        
          </Box>
          <Box className="enroll" >
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box>
                <p>prafull Kumar</p>
              </Box>
              <Box>
                <p>14 feb 2022</p>
              </Box>
            </Box>
            <p>cource enroll(6)</p>
            <Box className="cource">
              <button>UI/UX</button>
              <button>Photoshop</button>
              <button>Illustrator</button>
              <button>Python</button>
              <button>Mern</button>
              <button>Java</button>
            </Box>
            <Box>Referal amount ₹ 295</Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{color:"#800080"}}><h1>Term & condition</h1></Box>
    </Box>
  );
};

export default Main1;
