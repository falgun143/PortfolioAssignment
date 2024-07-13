import { Typography, Grid } from "@mui/material";
import React from "react";
import Data from "../utils/Data";
import "./Skills.css";
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


      <Grid className="section">
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Skills</h6>
      </Grid>
      
      <Grid item xs={12}>
        <Grid container>
          <Grid item sm={12} md={6}>
            <CustomTimeline title="Programming Languages" icon={<WorkIcon />}>
              {Data.programmingLanguage.map((language) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <Typography className="timeline_title">
                      {language}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        
          <Grid item sm={12} md={6}>
          <CustomTimeline title="FrameWork&Libraries-I" icon={<WorkIcon />}>
              {Data.frameworksAndLibraries1.map((framework) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <Typography className="timeline_title">
                      {framework}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <Grid container>
          <Grid item sm={12} md={6}>
            <CustomTimeline title="FrameWork&Libraries-II" icon={<WorkIcon />}>
              {Data.frameworksAndLibraries2.map((framework) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <Typography className="timeline_title">
                      {framework}
                    </Typography>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </CustomTimeline>
          </Grid>
          <Grid item sm={12} md={6}>
            <CustomTimeline title="VersionControl&OtherTools " icon={<WorkIcon />}>
              {Data.versionControlAndOtherTools.map((versioncontrol) => (
                <TimelineItem>
                  <CustomTimelineSeparator />
                  <TimelineContent>
                    <Typography className="timeline_title">
                      {versioncontrol}
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
