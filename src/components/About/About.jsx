import { Typography, Grid } from "@mui/material";
import React from "react";
import Data from "../utils/Data";
import "./About.css";
import WorkIcon from "@mui/icons-material/Work";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineItem from "@mui/lab/TimelineItem";
import {
  CustomTimeline,
  CustomTimelineSeparator,
} from "../TimeLine/CustomTimeLine";

const About = () => {
  return (
    <>
    <Grid container className="section pb_45">
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">About Me</h6>
      </Grid>
      <Grid item xs={12}>
        <Typography variant="h6" className="aboutme_text">
          {Data.about}
        </Typography>
      </Grid>   
    </Grid>

      <Grid className="section">
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Prior Experience</h6>
      </Grid>
      
      <Grid item xs={12}>
        <Grid container>
          {/* Experiences */}
          <Grid item sm={12} md={6}>
            <CustomTimeline title="Work Experience" icon={<WorkIcon />}>
              {Data.experience.map((experience) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <Typography className="timeline_title">
                      {experience.title}
                    </Typography>
                    <Typography variant="caption" className="timeline_date">
                      {experience.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="timeline_description"
                    >
                      {experience.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
          {/* Education */}
          <Grid item sm={12} md={6}>
          <CustomTimeline title="Education" icon={<WorkIcon />}>
              {Data.education.map((education) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <Typography className="timeline_title">
                      {education.title}
                    </Typography>
                    <Typography variant="caption" className="timeline_date">
                      {education.date}
                    </Typography>
                    <Typography
                      variant="body2"
                      className="timeline_description"
                    >
                      {education.description}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
      </Grid>
      
      </>
  );
};

export default About;
