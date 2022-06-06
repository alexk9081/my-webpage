import classes from "./aboutMePage.module.css"

function ProjectInfoPage() {
    return <div className={classes.profileInfo}>
        <img src="https://avatars.githubusercontent.com/u/89793763?v=4" alt="Author" className={classes.profileImg} width="200px" />
        <br/>
        I'm Alex, and I am a Computer Science major at the University of North Florida. Currently, I am the most proficient in Java but I have experience working on projects using Python, C, and JavaScript.
        <br/>
        My current focus is working on expanding my skillset and learning best practices.
        <br/>
        <br/>
        Github: alexk9081
        <br/>
        Email: alexk9081@gmail
        <br/>
    </div>
}

export default ProjectInfoPage;