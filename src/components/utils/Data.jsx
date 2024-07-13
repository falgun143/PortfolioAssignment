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
    twitter: {
      link: "https://x.com/PalFalgun",
      text: "MyTwitter",
      icon: <TwitterIcon />,
    },
    linkedIn: {
      link: "https://www.linkedin.com/in/falgun-pal/",
      text: "MyLinkedin",
      icon: <LinkedInIcon />,
    },
    GitHub: {
      link: "https://github.com/falgun143",
      text: "MyGithub",
      icon: <GitHubIcon />,
    },
  },
};

export default Data;
