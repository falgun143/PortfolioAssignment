import React from "react";
import './Button.css'
import Button from '@mui/material/Button';

export const CustomButton = ({ text, icon}) => {
  return (
    <Button
      className="custom_btn"
      endIcon={<div className="btn_icon_container">{icon}</div>}
    >
      <span className="btn_text">{text}</span>
    </Button>
  );
};
