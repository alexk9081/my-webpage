import classes from './blogPost.module.css';

function BlogPost(props) {
    return <div className={classes.body}>
        <p className={classes.text}>This is a test post</p>
    </div>
}

export default BlogPost;