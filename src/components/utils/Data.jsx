import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Data = {
  name: "Falgun Pal",
  title: "Mernstack developer",
  birthday: "15/09/2002",
  email: "palfalgun@gmail.com",
  phone: "9391136520",
  college:"IIIT V",
  socials: {
    facebook: {
      link: "https://www.facebook.com",
      text: "SamIsCoding",
      icon: <FacebookIcon />,
    },
    twitter: {
      link: "https://www.facebook.com",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    linkedIn: {
      link: "https://www.facebook.com",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://www.facebook.com",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
};

export default Data;
