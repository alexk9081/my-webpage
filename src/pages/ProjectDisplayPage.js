import ProjectCard from "../components/ProjectCard"
import classes from "./ProjectDisplayPage.module.css";

function ProjectDisplayPage() {



    return (
        <div className={classes.projectPage}>
            <ProjectCard projectName="Photo Gallery" projectDesc="Displays collection of images"></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
        </div>
    ) 
}

export default ProjectDisplayPage