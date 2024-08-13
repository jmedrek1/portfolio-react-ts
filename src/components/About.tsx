import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";

import textfile from "../assets/About/desc.txt";
import AboutPageImage from "./utils/AboutPageImage";
import { parseText } from "../helpers";

// Main component
export default function About(): JSX.Element {
  // retrieve text from external file
  const [text, setText] = useState('');

  // useEffect prevents this from running on every render
  useEffect(() => {
    fetch(textfile)
    .then((response) => response.text())
    .then((textContent) => {
      setText(textContent)
    })
    .catch((error: Error) => {
      console.error("Error fetching text:", error);
    });
  }, []);
  
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
          overflow: "hidden",
        }}
      >
        <AboutPageImage src="img/headshot.jpg" />
        <Box
          sx={{
            width: "50%",
            height: "100%",
            overflow: "auto",
            padding: 2,
          }}
        >
          <Typography
            variant="h3"
            className="text-left pb-5 pt-5 pl-2"
            sx={{
              color: "primary.main",
              fontWeight: "bold",
            }}
          >
            About Me
          </Typography>
          <Typography 
            variant="h6" 
            className="text-left whitespace-pre-wrap p-2"
            sx={{
              color: "primary.dark",
              fontWeight: "semi-bold"
            }}
          >
            {text ? parseText(text) : 'Loading...'}
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};