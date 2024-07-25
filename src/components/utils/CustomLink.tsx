import Link, { LinkProps } from "@mui/material/Link";

interface CustomLinkProps extends Omit<LinkProps, 'href'> {
  href: string;
  hoverColor?: string;
  underlineColor?: string;
  children: React.ReactNode
};

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