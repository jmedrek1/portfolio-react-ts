import { useParams } from "react-router-dom";
import { useContext } from "react";
import { ProjectContext } from "./ProjectGallery";
import ProjectCard from "./utils/ProjectCard";

export default function ProjectPage() {
  const projectData = useContext(ProjectContext);
  const { projectName } = useParams<{ projectName: string }>();
  
  const project = projectName ? projectData[projectName] : undefined;
  
  if (!projectName || !project) {
    return <div>Project not found</div>;
  }
  
  return (
    <>
      
    </>
  );
};