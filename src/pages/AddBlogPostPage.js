import classes from "./AddBlogPostPage.module.css";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

function AddInfoPage(props) {
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");
    const navigate = useNavigate();

    async function submitPost() {
        const blogPostData = collection(firestore, "blogPosts");

        const docData = {
            body: body,
            title: title,
            userDisplayName: props.userName,
            userImageUrl: props.userImg,
            date: Timestamp.fromDate(new Date())
        };

        await addDoc(blogPostData, docData).then(() => { navigate('/my-webpage') });
    }
    return (
        <div className={classes.addPostPage}>
            <div className={classes.aligner}>
                <h1 className={classes.title}>Create A Blog Post</h1>
                <input className={classes.titleInput} onChange={(newTitleInput) => { setTitle(newTitleInput.target.value) }} type="text" placeholder="Title" />
                <textarea className={classes.bodyInput} onChange={(newBodyInput) => { setBody(newBodyInput.target.value) }} type="text" placeholder="Body" />
                <input className={classes.submit} onClick={() => { submitPost() }} type="submit" />
                

                <Link to='/data/add-blog'>Add Post</Link>
                <Link to='/data/preview-blog'>Preview Post</Link>
                <Outlet />
            </div>
        </div>
    )
}

export default AddInfoPage;