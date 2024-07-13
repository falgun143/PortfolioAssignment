import { Typography, Card } from "@mui/material";
import React from "react";
import Image from "../../../public/profileimage.png";
import { CustomTimeline } from "../TimeLine/CustomTimeLine";
import { CustomTimelineSeparator } from "../TimeLine/CustomTimeLine";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import Data from "../../components/utils/Data";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { CustomButton } from "../Button/Button";
import "./Profile.css";
import EmailOutlined from "@mui/icons-material/EmailOutlined";

const CustomTimelineItem = ({ title, text }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content">
      <span className="timeline_text" style={{ color: "black" }}>
        {title}
      </span>
      <span className="timeline_text">: {text}</span>
    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="container_shadow">
      <div className="profile_name">
        <Typography variant="h4"  fontWeight={"500"} >{Data.name}   </Typography>
        <Typography variant="subtitle1" color={"#77777B"} fontWeight={"500"} >
          {Data.title}
        </Typography>
      </div>

      <figure className="profile_image">
        <img src={Image}></img>
      </figure>

      <div className="profile_info">
        <CustomTimeline
          icon={<PersonOutlineIcon fontSize="small"></PersonOutlineIcon>}
        >
          <CustomTimelineItem
            title="Name"
            text={Data.name}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title="Birthday"
            text={Data.birthday}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title="Phone"
            text={Data.phone}
          ></CustomTimelineItem>
          <CustomTimelineItem
            title="College"
            text={Data.college}
          ></CustomTimelineItem>
        </CustomTimeline>
        <div className="btn_container">
          <a href={`mailto:${Data.email}`} style={{ textDecoration: 'none' }}>
          <CustomButton
            text={"Hire Me"}
            icon={<EmailOutlined fontSize="small" />}
          ></CustomButton>
          </a>
         
        </div>
      </div>
    </div>
  );
};

export default Profile;
