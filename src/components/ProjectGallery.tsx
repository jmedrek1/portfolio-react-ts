import ProjectCard from "./utils/ProjectCard";
import projectData from "../assets/Projects/projects.json";
import { ProjectDataType } from 'types';
import { createContext } from "react";
import { Grid, Box, SxProps, Theme, Typography } from "@mui/material";

const boxStyles: SxProps<Theme> = {
  bgcolor: "secondary.main",
  minHeight: "100vh",
  width: "100%",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 0,
  left: 0,
};

const headerBoxStyles: SxProps<Theme> = {
  alignSelf: "flex-start",
  margin: "2rem",
  color: "primary.dark",
};

const galleryBoxStyles: SxProps<Theme> = {
  overflowX: "hidden", // Hide horizontal scrollbar
  width: "100%", // Ensure full width
  padding: "0 1rem", // Add some horizontal padding
};

export const ProjectContext = createContext<ProjectDataType>(projectData);

export default function ProjectGallery() {

  return (
    <ProjectContext.Provider value={projectData}>

      <Box sx={boxStyles}>
        <Box sx={headerBoxStyles}>
          <Typography variant="h3" fontWeight={900} align="left" color="primary.main">
            My Projects
          </Typography>
        </Box>
        <Box sx={galleryBoxStyles}>
          <Grid container spacing={6}>
            {Object.keys(projectData).map((projectName) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={projectName}>
                <ProjectCard projectName={projectName} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
      
    </ProjectContext.Provider>
  );
}