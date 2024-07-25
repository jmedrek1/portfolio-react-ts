import Link from "@mui/material/Link";
import { CustomLinkProps } from "types";

export default function CustomLink({ 
  href, 
  children, 
  hoverColor = "primary.main",
  ...props 
}: CustomLinkProps): JSX.Element {
  
  return (
    <Link 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      color="primary.dark"
      sx={{
        textDecoration: "none",
        '&:hover': {
          color: hoverColor,
        }
      }}
      {...props}
    >
      {children}
    </Link>
  );
};