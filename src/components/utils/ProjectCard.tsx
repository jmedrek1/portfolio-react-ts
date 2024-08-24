import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import { SxProps, Theme } from "@mui/material/styles";
import { ProjectCardProps } from "types";
import { useContext } from "react";
import { ProjectContext } from "../ProjectGallery";
import { formatDate } from "../../helpers";

const paperStyles: SxProps<Theme> = {
  bgcolor: "secondary.main",
  width: "100%",
  height: "30vmin",
  position: "relative",
  overflow: "hidden",
  borderRadius: 3,
  display: "flex",
  marginBottom: 2,
}

const imageContainerStyles: SxProps<Theme> = {
  width: "30vmin",
  height: "30vmin",
  position: "relative",
  overflow: "hidden",
  padding: 2,
}

const imageStyles: SxProps<Theme> = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 2,
}

const contentStyles: SxProps<Theme> = {
  flexGrow: 1,
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "flex-start",
  padding: 2,
}

const linkStyles: SxProps<Theme> = {
  textDecoration: 'none',
  color: 'inherit',
  display: 'inline-block',
  width: '100%',
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
        <Box sx={imageContainerStyles}>
          <Box component="img" src={project.imagePath} alt={projectName} sx={imageStyles}/>
        </Box>
        <Box sx={contentStyles}>
          <Typography variant="h3" fontWeight={400} color="primary.main" gutterBottom>
            {project.fullname}
          </Typography>
          <Typography variant="h5" color="primary.dark" gutterBottom>
            {formatDate(project.startDate, project.endDate, 'MM/yy')}
          </Typography><br/>
          <Typography variant="body1">
            Technologies:
          </Typography>
          <Typography variant="subtitle1" fontFamily={"monospace"} gutterBottom>
            {project.tech.join(',  ')}
          </Typography>
        </Box>
      </Paper>
    </Link>
  );
}