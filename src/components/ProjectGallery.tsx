import ProjectCard from "./utils/ProjectCard";
import projectData from "../assets/Projects/projects.json";

export default function ProjectGallery() {
  // TODO: create grid to house project cards, and when clicked, will go to separate project page
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
    <>
      {/* <ProjectCard projectName="The Adventures of Shamrock Sholmes" projectData={projectData} /> */}
    </>
  );
}