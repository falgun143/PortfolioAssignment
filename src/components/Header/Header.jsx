import React from "react";
import {
  Button,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  HomeRounded,
  SchoolRounded,
  WorkRounded,
  Facebook,
  Twitter,
  LinkedIn,
  GitHub,
  Telegram,
} from "@mui/icons-material";
import { Link, NavLink,useLocation } from "react-router-dom";
import "./Header.css"
import Data from "../utils/Data"
import {CustomButton} from "../Button/Button"
const Header = (props) => {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <Navbar expand="lg" sticky="top" className="header">
      {/* Home link */}
      <Nav.Link as={NavLink} to="/PortfolioAssignment/About">
        <Navbar.Brand className="header_home">
          <HomeRounded />
        </Navbar.Brand>
      </Nav.Link>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav className="header_left">
          {/* About Link */}
          <Nav.Link
            as={NavLink}
            to="/PortfolioAssignment/About"
            className={pathname === "/PortfolioAssignment/About" ? "header_link_active" : "header_link"}
          >
            ABOUT
          </Nav.Link>
          {/* Skills */}
          <Nav.Link
            as={NavLink}
            to="/PortfolioAssignment/skills"
            className={pathname === "/PortfolioAssignment/skills" ? "header_link_active" : "header_link"}
          >
            SKILLS
          </Nav.Link>
           {/* PortFolio*/}
          <Nav.Link
            as={NavLink}
            to="/PortfolioAssignment/portfolio"
            className={
              pathname === "/PortfolioAssignment/portfolio" ? "header_link_active" : "header_link"
            }
          >
            PORTFOLIO
          </Nav.Link>
        </Nav>
        <div className="header_right">
          {Object.keys(Data.socials).map((key) => (
            <a href={Data.socials[key].link} target="_blank">
              {Data.socials[key].icon}
            </a>
          ))}
        </div>
      
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
