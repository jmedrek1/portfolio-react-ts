import ProjectCard from "./utils/ProjectCard";
import projectData from "../assets/Projects/projects.json";
import { ProjectDataType } from 'types';
import { createContext } from "react";
import { Box, SxProps, Theme, Typography } from "@mui/material";

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
  display: "flex",
  flexDirection: "column",
};

export const ProjectContext = createContext<ProjectDataType>(projectData);

export default function ProjectGallery() {

  return (
    <ProjectContext.Provider value={projectData}>

      <Box sx={boxStyles}>
        <Box sx={headerBoxStyles}>
          <Typography variant="h3" fontWeight={600} align="left" color="primary.main">
            My Projects
          </Typography>
        </Box>
        <Box sx={galleryBoxStyles}>
          {Object.keys(projectData).map((projectName) => (
            <ProjectCard projectName={projectName} />
          ))}
        </Box>
      </Box>
      
    </ProjectContext.Provider>
  );
}