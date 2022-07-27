import classes from "./AboutMePage.module.css";

function AboutMePage({ notification }) {
    const copyEmail = () => {
        navigator.clipboard.writeText("AlexK9081@gmail.com");
        notification("Copied AlexK9081@gmail.com to clipboard", "#1a2458");
    }

    return (
        <div className={classes.profileInfo}>
            <img src="https://avatars.githubusercontent.com/u/89793763?v=4" alt="Author" className={classes.profileImg} width="200px" />
            <br />
            <p className={classes.profileText}>
                I'm Alex, and I am a Computer Science major at the University of North Florida. Currently, I am the most proficient in Java but I have experience working on projects using Python, C, and JavaScript.
            </p>
            <br />
            <p className={classes.profileText}>
                My current focus is working on expanding my skillset and learning best practices.
            </p>
            <br />
            <p className={classes.profileText}>
                Languages (Most-Least Proficient): Java, JavaScript, Python, C, C#
            </p>
            <br />
            <p className={classes.profileText}>
                Frameworks: React
            </p>
            <br /><br />
            <button className={classes.buttonLink} onClick={() => { window.location.href = 'https://github.com/alexk9081' }} >AlexK9081</button>
            <button className={classes.buttonLink} onClick={copyEmail}>AlexK9081@gmail.com</button>
            <br />
        </div>
    )
}

export default AboutMePage;