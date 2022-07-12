import classes from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ProjectCard(props) {

    return (
        <Link to={props.link}>
            <div className={classes.cardHolder}>
                <div className={classes.projectCard}>
                    <img className={classes.projectImg} src={props.imgUrl} alt={props.imgAlt} />
                    <h1 className={classes.text}>{props.projectName}</h1>
                    <p className={classes.text}>{props.projectDesc}</p>
                </div>
            </div>
        </Link>
    )
};

ProjectCard.defaultProps = {
    imgUrl: "https://www.economist.com/img/b/1190/670/90/sites/default/files/images/2015/09/blogs/economist-explains/code2.png",
    imgAlt: "Project preview",
    projectName: "Project Name",
    projectDesc: "Project Description",
    link: "/my-webpage"
}

ProjectCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    imgAlt: PropTypes.string,
    projectName: PropTypes.string.isRequired,
    projectDesc: PropTypes.string,
    link: PropTypes.string.isRequired
}

export default ProjectCard;