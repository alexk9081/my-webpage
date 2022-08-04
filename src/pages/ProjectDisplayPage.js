import ProjectCard from "../components/ProjectCard"
import classes from "./ProjectDisplayPage.module.css";
import projectList from "../documents/projectsInfo.json";
import HiddenScrollDiv from "../components/HiddenScrollDiv";
import { v4 as uuidv4 } from 'uuid';

function ProjectDisplayPage() {
    const projects = projectList.map((data) => {
        return <ProjectCard
            link={data.link}
            projectName={data.projectName}
            projectDesc={data.projectDesc}
            imgUrl={data.imgUrl}
            imgAlt={data.imgAlt}
            key={uuidv4()}
        />
    });

    return (
        <div className={classes.projectPage}>
            <HiddenScrollDiv contentClass={classes.scrollDiv}>
                <div className={classes.cards}>
                    {projects}
                </div>
            </HiddenScrollDiv>
        </div>
    )
}

export default ProjectDisplayPage