import { Typography} from "@mui/material";
import React from "react";
import "./Footer.css";
import Data from "../utils/Data"
const Footer = () => {
  return (
    <div className="footer" style={{marginBottom:"15px"}}>
      <div className="footer_left">
        <Typography>{Data.name}</Typography>
      </div>
      <div className="footer_right">
        <Typography className="footer_copyright">
          Designed and Developed by{" "}
          <a href="/" target="_blank">
            FalgunPal
          </a>
          <br />
        </Typography>
      </div>
    </div>
  );
};

export default Footer;