import classes from "./BlogPost.module.css";

function BlogPost({ title, time, description, userName, userImg }) {

    return <div className={classes.post}>
        <h1 className={classes.postDivider}>•••</h1>

        <h2 className={classes.title}>
            {title}
        </h2>
        <h3 className={classes.date}>
            {time}
        </h3>
        <hr className={classes.sectionBreak} />
        <p className={classes.desc}>
            {description}
        </p>
        <hr className={classes.sectionBreak} />
        <img className={classes.userImg} src={userImg} alt="Poster" referrerPolicy="no-referrer" />
        <h4 className={classes.userName} >{userName}</h4>
    </div>
}

export default BlogPost;