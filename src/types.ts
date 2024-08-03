import { LinkProps } from "react-router-dom";

// UTILS
export interface CustomLinkProps extends Omit<LinkProps, 'href'> {
  href: string;
  hoverColor?: string;
  underlineColor?: string;
  children: React.ReactNode
};

// COMPONENTS
// Define interfaces for the date and project structure
interface ProjectDate {
  month: number;
  year: number;
}

interface ProjectInfo {
  fullname: string;
  descriptionPath: string;
  imagePath: string;
  startDate: ProjectDate;
  endDate: ProjectDate;
}

// Define the type for the entire projectData object
export type ProjectDataType = {
  [key: string]: ProjectInfo;
};

export interface ProjectCardProps {
  projectName: string;
}