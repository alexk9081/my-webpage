import classes from "./BlogPost.module.css";
import PropTypes from "prop-types";

function BlogPost({ title, time, description, userName, userImg }) {

    return (
        <div className={classes.post}>
            <h1 className={classes.postDivider}>•••</h1>
            <h2 className={classes.title}>
                {title}
            </h2>
            <h3 className={classes.date}>
                {time}
            </h3>
            <hr className={classes.sectionBreakLine} />
            <p className={classes.desc}>
                {description}
            </p>
            <hr className={classes.sectionBreakLine} />
            <img className={classes.userImg} src={userImg} alt="Poster" referrerPolicy="no-referrer" />
            <h4 className={classes.userName} >{userName}</h4>
        </div>
    )
}

BlogPost.propTypes = {
    title: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    userName: PropTypes.string.isRequired,
    userImg: PropTypes.string.isRequired
}

export default BlogPost;