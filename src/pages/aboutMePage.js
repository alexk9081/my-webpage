import classes from "./AboutMePage.module.css";

function ProjectInfoPage() {
    return <div className={classes.profileInfo}>
        <img src="https://avatars.githubusercontent.com/u/89793763?v=4" alt="Author" className={classes.profileImg} width="200px" />
        <br/>
        <p className={classes.profileText}>
            I'm Alex, and I am a Computer Science major at the University of North Florida. Currently, I am the most proficient in Java but I have experience working on projects using Python, C, and JavaScript.
        </p>
        <br/>
        <p className={classes.profileText}>
            My current focus is working on expanding my skillset and learning best practices.
        </p>
        <br/><br/>
        <p className={classes.profileLinks}>
            <b>Github:</b> <a className={classes.profileHyperLink} href="https://github.com/alexk9081">AlexK9081</a>
        </p>
        <p className={classes.profileLinks}>
            <b>Email:</b> <a className={classes.profileHyperLink} href="mailto:alexk9081@gmail.com">AlexK9081@gmail.com</a>
        </p>
        <br/>
    </div>
}

export default ProjectInfoPage;