import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { SxProps, Theme } from "@mui/material/styles";
import { ProjectCardProps } from "types";
import { useContext } from "react";
import { ProjectContext } from "../ProjectGallery";

const paperStyles: SxProps<Theme> = {
  bgcolor: "secondary.main",
  width: "30vmin",
  height: "30vmin",
  position: "relative",
  overflow: "hidden",
  borderRadius: 3,
  "&:hover .project-name": {
    transform: "translateY(0)"
  },
}

const imageStyles: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
}

const nameStyles: SxProps<Theme> = {
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: "rgba(254, 248, 220, 0.7)", // secondary.main at .7 opacity
  color: "primary.dark",
  padding: 1,
  transform: "translateY(100%)",
  transition: "transform 0.3s ease-in-out",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
}

const contentContainerStyles: SxProps<Theme> = {
  position: "absolute",
  top: 8,
  left: 8,
  right: 8,
  bottom: 8,
  borderRadius: 2,
  overflow: "hidden",
}

const linkStyles: SxProps<Theme> = {
  textDecoration: 'none',
  color: 'inherit',
  display: 'inline-block',
  width: 'fit-content',
}

export default function ProjectCard({ projectName }: ProjectCardProps): JSX.Element {
  const projectData = useContext(ProjectContext);
  const project = projectData[projectName];

  if (!project) {
    return <Paper sx={paperStyles}>Project not found</Paper>;
  }
  return (
    <Link href={`/project/${projectName}`} sx={linkStyles}>
      <Paper elevation={3} sx={paperStyles}>
        <Box sx={contentContainerStyles}>
          <Box component="img" src={project.imagePath} alt={projectName} sx={imageStyles}/>
          <Typography 
            variant="subtitle1"
            className="project-name"
            sx={nameStyles}
          >
            {project.fullname}
          </Typography>
        </Box>
      </Paper>
    </Link>
    
  );
}