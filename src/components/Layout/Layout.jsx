import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import {  Card } from "@mui/material";


const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Card className='main-content' 
      sx={{
         
          borderColor: "#FCF8F3",
          borderWidth: "2px",
          borderStyle: "solid"
        }}
      >
        {children}
      </Card>
      <Footer />
    </>
  );
};

export default Layout;