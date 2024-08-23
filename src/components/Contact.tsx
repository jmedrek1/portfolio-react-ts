import { Box, Button, Link, Paper, TextField, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArticleIcon from '@mui/icons-material/Article';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function Contact(): JSX.Element {
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
          minHeight: "0vmin",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          padding: 3,
        }}
      >
        <Typography
          variant="h3"
          className="text-left pb-5 pt-5 pl-2"
          sx={{
            color: "primary.main",
            fontWeight: 400,
          }}
        >
          Let's Connect!
        </Typography>
        <Box
          component="form"
          // TODO: onSubmit={handleSubmit}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
          }}
        >
          <TextField 
            label="Email" 
            fullWidth 
            sx={{ 
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
          <TextField 
            label="Message" 
            multiline 
            rows={10}
            fullWidth
            sx={{ 
              flexGrow: 1,
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
              }
            }}
          />
          <Box sx={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            mt: 2 
          }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
              <Link href="https://www.linkedin.com/in/john-medrek-072a31212/" target="_blank">
                <LinkedInIcon sx={{ fontSize: 30, color: 'primary.main' }} />
              </Link>
              <Link href="https://github.com/jmedrek1" target="_blank">
                <GitHubIcon sx={{ fontSize: 30, color: 'primary.main' }} />
              </Link>
              <Link href="https://docs.google.com/document/d/19Foi02SINpll4nOACN4ricSessI7Eqr3CqIbGtC-25M/edit?usp=sharing" target="_blank">
                <ArticleIcon sx={{ fontSize: 30, color: 'primary.main' }} />
              </Link>
            </Box>
            <Button 
              variant="contained" 
              type="submit"
              sx={{ 
                borderRadius: 4,
                width: '48px',
                height: '48px',
              }}
            >
              <ArrowForwardIcon />
            </Button>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
}