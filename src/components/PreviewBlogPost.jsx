import classes from "./PreviewBlogPost.module.css";
import { useOutletContext, Link } from "react-router-dom";
import BlogPost from "./BlogPost";

function PreviewBlogPost() {
    const [title, body, userName, userImg] = useOutletContext();


    return (
        <div className={classes.previewPostSection}>
            <h1 className={classes.title}>Blog Post Preview</h1>

            <BlogPost title={title ? title : "INSERT TITLE"}
                description={body ? body : "INSERT BODY"}
                userName={userName ? userName : "Poster"}
                userImg={userImg ? userImg : "https://lh3.googleusercontent.com/a-/AOh14Gg7yiSuDoCskXTNN_tWYAP-fR2IgnVugU_4IGQ=s96-c"} 
            />

            <Link className={classes.changePage} to='/data/add-blog'>Edit Post</Link>
        </div>
    )
}

export default PreviewBlogPost;