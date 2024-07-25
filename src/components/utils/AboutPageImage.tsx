import Box from "@mui/material/Box";

interface AboutPageImageProps {
  src: string;
};

export default function AboutPageImage({ src }: AboutPageImageProps): JSX.Element {
  return (
    <Box
      sx={{
        width: "50%",
        height: "100%",
        overflow: "hidden",
      }}
    >
      <img 
        src={src} 
        alt="Page Image"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    </Box>
  );
};