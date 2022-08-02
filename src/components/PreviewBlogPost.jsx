import classes from "./PreviewBlogPost.module.css";
import { useOutletContext, Link } from "react-router-dom";
import { Timestamp } from "firebase/firestore";
import BlogPost from "./BlogPost";

function PreviewBlogPost() {
    const [title, _setTitle, body, _setBody, userName, userImg] = useOutletContext();


    return (
        <div>
            <h1 className={classes.title}>Blog Post Previw</h1>

            <BlogPost title={title}
                description={body}
                time={Timestamp.fromDate(new Date()).seconds}
                userName={userName}
                userImg={userImg} 
            />

            <Link to='/data/add-blog'>Add Post</Link>
        </div>
    )
}

export default PreviewBlogPost;