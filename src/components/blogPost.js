import classes from './blogPost.module.css';

function BlogPost(props) {
    return <div className={classes.post}>
        <div className={classes.sect}>
            <h2 className={classes.title}>
                Lorem Ipsum Dolor
            </h2>
            <h3 className={classes.date}>
                Date: 02/21/2021 @ 21:47
            </h3>
        </div>
        <div className={classes.sect}>
            <p className={classes.desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        <div className={classes.sect}>
            <h4>
                Signature
            </h4>
            <p>
                Whats poppin'
            </p>
        </div>
    </div>
}

export default BlogPost;