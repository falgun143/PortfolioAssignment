import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import WorkIcon from "@mui/icons-material/Work";
import "./TimeLine.css";
import { Typography } from "@mui/material";

export const CustomTimeline = ({ title, icon, children }) => {
  return (
    <Timeline className={"timeline"}>
      <TimelineItem className={"timeline_firstItem"}>
        <TimelineSeparator>
          <TimelineDot className={"timeline_dot_header"}>{icon}</TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>
          <Typography variant="h1" className={"timeline_header"}>
           {title}
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {children}
    </Timeline>
  );
};

export const CustomTimelineSeparator = () => (
  <TimelineSeparator className="spearator_padding">
    <TimelineDot variant="outline"  className="timeline_dot" />
    <TimelineConnector />
  </TimelineSeparator>
);

