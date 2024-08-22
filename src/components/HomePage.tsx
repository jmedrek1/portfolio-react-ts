import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { SxProps, Theme } from "@mui/material/styles";
import useTypewriter from "../hooks/useTypewriter";

const boxStyles: SxProps<Theme> = {
  bgcolor: "primary.main",
  minHeight: "100vh",
  width: "100vw",
  margin: 0,
  padding: 0,
  display: "flex",
  flexDirection: "column",
  position: "absolute",
  top: 0,
  left: 0,
};

const headerBoxStyles: SxProps<Theme> = {
  color: "secondary.main",
  alignSelf: "flex-start",
  margin: "2rem",
};

const linkBoxStyles: SxProps<Theme> = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  flex: 1,
  gap: "1rem",
  marginTop: "-200px", // moves up fixed amount
};

const linkStyles: SxProps<Theme> = {
  color: "secondary.main",
  textDecoration: "none",
  fontSize: "1.5rem",
  transition: "all 0.3s ease", // Smooth transition for hover effect
  padding: "0.5rem 1rem", // Add some padding for better hover effect
  borderRadius: "4px", // Rounded corners
  "&:hover": {
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", // Shadow on hover
    transform: "translateY(-2px)", // Slight upward movement on hover
    backgroundColor: "rgba(255, 255, 255, 0.1)", // Slight background change on hover
  },
};

function HomePage(): JSX.Element {
  return (
    <>
      <CssBaseline />
      <Box sx={boxStyles}>
        <Box sx={headerBoxStyles}>
          <Typography variant="h2" fontWeight={400} align="left">
            John Medrek
          </Typography>
          <Typography variant="h4" fontWeight={200} align="left" fontFamily={"monospace"}>
            {useTypewriter("CS Student @ UConn", 70)}
          </Typography>
        </Box>

        <Box sx={linkBoxStyles}>
          <Link href="/about" sx={linkStyles}>About</Link>
          <Link href="/projects" sx={linkStyles}>Projects</Link>
          <Link href="/contact" sx={linkStyles}>Contact</Link>
        </Box>
      </Box>
    </>
  );
}

export default HomePage;