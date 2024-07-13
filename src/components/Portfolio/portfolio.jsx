import {
  Grid,
  Tab,
  Tabs,
  Grow,
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Slide
} from "@mui/material";
import React, { useState } from "react";
import "./Portfolio.css";
import Data from "../utils/Data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} timeout={{ enter: 500, exit: 500 }} />;
});
export const Portfolio = () => {
  const [tabValue, setTabValue] = useState("All");
  const [projectDialog, setProjectDialog] = useState(false);

  return (
    <Grid container className="section pb_45 pt_45">
      <Grid item className="section_title mb_30">
        <span></span>
        <h6 className="section_title_text">Portfolio</h6>
      </Grid>

      <Grid item xs={12}>
        <Tabs
          value={tabValue}
          indicatorColor="primary"
          className="customTabs"
          onChange={(event, newValue) => setTabValue(newValue)}
          sx={{
            ".MuiTabs-indicator": {
              display: "none",
            },
            ".MuiTab-root": {
              textTransform: "none",
            },
          }}
        >
          <Tab
            label="ALL"
            value="All"
            className={
              tabValue === "All" ? "customTabs_item active" : "customTabs_item"
            }
          />
          {[...new Set(Data.projects.map((item) => item.tag))].map((tag) => (
            <Tab
              key={tag}
              label={tag}
              value={tag}
              className={
                tabValue === tag ? "customTabs_item active" : "customTabs_item"
              }
            />
          ))}
        </Tabs>
      </Grid>

      {/* Projects */}
      <Grid item xs={12}>
        <Grid container spacing={3}>
          {Data.projects.map((project) => (
            <>
              {tabValue === project.tag || tabValue === "All" ? (
                <Grid item xs={12} sm={6} md={6} lg={4} key={project.title}>
                  <Grow in timeout={1000}>
                    <Card
                      className="customCard"
                      onClick={() => setProjectDialog(project)}
                    >
                      <CardActionArea>
                        <CardMedia
                          className="customCard_image"
                          image={project.image}
                          title={project.title}
                        />
                        <CardContent  >
                          <Typography className="customCard_title">
                            {project.title}
                          </Typography>
                          <br></br>
                          <Typography
                            variant="body2"
                            className="customCard_description"
                          >
                            {project.description}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                  </Grow>
                </Grid>
              ) : null}
            </>
          ))}
        </Grid>
      </Grid>

      <Dialog
        open={projectDialog}
        TransitionComponent={Transition}
        onClose={() => setProjectDialog(false)}
      >
        <DialogTitle onClose={() => setProjectDialog(false)}>
          {projectDialog.title}
        </DialogTitle>
        <img src={projectDialog.image} alt={projectDialog.title} className="projectDialog_image" />
        <DialogContent sx={{minWidth:"500px"}}>
          <Typography className="projectDialog_description">
            {projectDialog.description}
          </Typography>
        </DialogContent>

        <DialogActions className="projectDialog_actions">
          {<a href={projectDialog.link}><Typography>LINK</Typography></a>}
        </DialogActions>
      </Dialog>
    </Grid>
  );
};
