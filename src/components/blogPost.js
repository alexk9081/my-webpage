import classes from './blogPost.module.css';

function BlogPost(props) {
    return <div className={classes.post}>
        <p>This is a test post</p>
    </div>
}

export default BlogPost;