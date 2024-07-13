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
  about:" I'm a Final year IT student studying at IIIT Vadodara. I enjoy solvingbugs and do open source Contributions(Check Out Protfolio for Prior Contributions).\n \n I am passionate to work on realworld projects and solve issues and bugs by open source contributions.Leveraging my expertise in the MERN stack, I am dedicated to findinginnovative solutions that enhance usability and ensure technology isaccessible to everyone.",
  experience:[
    {
      title:"Contributions to Music Blocks(GSOC Organisation)",
      date:"Jan 2024 – Mar 2024 ",
      description:"Worked on many bugs and enhancments involved in MusicBlocks. Optimised the Existing Code by removing unnecessary"
    },
    {
      title:"Hacktober 23",
      date:"October 2023",
      description:"Sucessfully completed hactober 2023 by making 5 pr's"
    },
  ],
  education:[
    {
      "title": "B.Tech. (IT)",
      "date": "2021 – 2025",
      "description": "IIIT Vadodara, Gandhinagar, Gujarat, 7.514 CGPA"
    },
    {
      "title": "Higher Secondary",
      "date": "2019",
      "description": "Sri Chaitanya, Madhapur, Hyderabad, 96%"
    },
    {
      "title": "Secondary",
      "date": "2018",
      "description": "Sri Chaitanya High School, Madhapur, Hyderabad, 9.7 CGPA, Siddipet"
    }
  ],
programmingLanguage: ["Java", "JavaScript", "Python"],
  frameworksAndLibraries1: ["Prisma", "Sequelize", "HTML", "CSS", "ReactJS", "NodeJS"],
  frameworksAndLibraries2:[ "ExpressJS", "MongoDB", "MySql", "Chakra UI","Material UI"],
  versionControlAndOtherTools: ["Git", "Github", "Postman", "Docker"]


};

export default Data;
