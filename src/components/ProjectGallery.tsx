import ProjectCard from "./utils/ProjectCard";
import projectData from "../assets/Projects/projects.json";
import { ProjectDataType } from 'types';
import { createContext } from "react";

export const ProjectContext = createContext<ProjectDataType>(projectData);

export default function ProjectGallery() {
  // TODO: create grid to house project cards
  const PERSONAL: string[] = [
    "ShamrockSholmes",
    "YouDodgedABullet",
    "StockPicker",
    "SpotifyClone",
  ];

  const WORK: string[] = [
    "CFNI",
    "GrantTrails",
    "BCM",
    "Timesheet",
    "VeRNet",
    "VisTSN",
  ];

  return (
    <ProjectContext.Provider value={projectData}>
      <ProjectCard projectName="shamrock" />
    </ProjectContext.Provider>
  );
}