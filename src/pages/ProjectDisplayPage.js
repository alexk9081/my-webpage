import ProjectCard from "../components/ProjectCard"
import classes from "./ProjectDisplayPage.module.css";
import projectList from "../documents/projectsInfo.json";

function ProjectDisplayPage() {
    const projects = projectList.map((data) => {
        return <ProjectCard
            link={data.link}
            projectName={data.projectName}
            projectDesc={data.projectDesc}
            imgUrl={data.imgUrl}
            imgAlt={data.imgAlt}
            key={data.projectName}
        />
    });

    return (
        <div className={classes.projectPage}>
            <div className={classes.cards}>
                {projects}
            </div>
        </div>
    )
}

export default ProjectDisplayPage