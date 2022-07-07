import ProjectCard from "../components/ProjectCard"
import classes from "./ProjectDisplayPage.module.css";

function ProjectDisplayPage() {



    return (
        <div className={classes.projectPage}>
            <ProjectCard projectDesc="Displays collection of images" projectName="Photo Gallery"></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
            <ProjectCard></ProjectCard>
        </div>
    ) 
}

export default ProjectDisplayPage