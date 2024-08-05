import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { ProjectContext } from "./ProjectGallery";
import { format } from "date-fns";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";

export default function ProjectPage() {
  const projectData = useContext(ProjectContext);
  const { projectName } = useParams<{ projectName: string }>();
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  
  const project = projectName ? projectData[projectName] : undefined;
  
  if (!projectName || !project) {
    console.error(`project ${projectName} not found.`);
    return (<></>);
  };

  const formatDate = (date) => {
    return format(new Date(date.year, date.month - 1), 'MMMM yyyy'); // months from 0 to 11
  }

  useEffect(() => {
    if (project.descriptionPath) {
      import(`../assets/Projects/${project.descriptionPath}`)
        .then(module => fetch(module.default))
        .then(response => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.text();
        })
        .then(text => setDescription(text))
        .catch(error => {
          console.error("Error loading description:", error);
          setError(error.message);
        });
    }
  }, [project]);

  return (
    <Box 
      sx={{
        bgcolor: "secondary.main",
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Paper
        elevation={3}
        sx={{
          bgcolor: "secondary.main",
          width: "80vmin",
          height: "80vmin",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          borderRadius: 3,
          padding: 3,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
            height: "30%",
            marginBottom: 2,
          }}
        >
          <Box
            sx={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingRight: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{
                color: "primary.main",
                fontWeight: "bold",
                marginBottom: 1,
              }}
            >
              {project.fullname}
            </Typography>
            <Typography 
              variant="subtitle1"
              sx={{
                color: "primary.dark",
              }}
            >
              {formatDate(project.startDate)} - {formatDate(project.endDate)}
            </Typography>
          </Box>
          <Card
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              flexDirection: "column",
              borderRadius: 1,
            }}
          >
            <CardMedia
              component="img"
              image={`/${project.imagePath}`}
              alt={project.fullname}
              sx={{
                height: "100%",
                objectFit: "cover",
              }}
            />
          </Card>
        </Box>
        <Box
          sx={{
            width: "100%",
            height: "70%",
            overflow: "auto",
          }}
        >
          <Typography 
            variant="body1"
            className="text-left pt-5"
            sx={{
              color: "primary.dark",
              fontWeight: "normal",
              whiteSpace: "pre-wrap",
            }}
          >
            {error ? `Error loading description: ${error}` : description}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};