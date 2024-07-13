import { Typography, Card } from "@mui/material";
import React from "react";
import Image from "../../../public/profileimage.png";
import { CustomTimeline } from "../TimeLine/CustomTimeLine";
import Timeline from "@mui/lab/Timeline";
import { CustomTimelineSeparator } from "../TimeLine/CustomTimeLine";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineContent from "@mui/lab/TimelineContent";
import Data from "../../components/utils/Data";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import "./Profile.css";

const CustomTimelineItem = ({ title, text }) => (
  <TimelineItem>
    <CustomTimelineSeparator />
    <TimelineContent className="timeline_content" >
    
      <span  className="timeline_text" style={{color:"black"}} >{title}</span>
      <span className="timeline_text" >: {text}</span>

    </TimelineContent>
  </TimelineItem>
);

const Profile = () => {
  return (
    <div className="container_shadow">
      <div className="profile_name">
        <Typography variant="h5">{Data.name}</Typography>
        <Typography variant="subtitle2" color={"#77777B"}>
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
      </div>
    </div>
  );
};

export default Profile;
