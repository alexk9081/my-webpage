import classes from "./AddBlogPost.module.css";
import { useOutletContext, useNavigate, Link } from "react-router-dom";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { firestore } from "../firebaseConfig";

function AddBlogPost() {
    const [title, setTitle, body, setBody, userName, userImg] = useOutletContext();
    const navigate = useNavigate();


    async function submitPost() {
        const blogPostData = collection(firestore, "blogPosts");
        const docData = {
            body: body,
            title: title,
            userDisplayName: userName,
            userImageUrl: userImg,
            date: Timestamp.fromDate(new Date())
        };

        await addDoc(blogPostData, docData).then(() => { navigate('/my-webpage') });
    }


    return (
        <div>
            <h1 className={classes.title}>Create A Blog Post</h1>
            <input className={classes.titleInput} onChange={(newTitleInput) => { setTitle(newTitleInput.target.value) }} type="text" placeholder="Title" />
            <textarea className={classes.bodyInput} onChange={(newBodyInput) => { setBody(newBodyInput.target.value) }} type="text" placeholder="Body" />
            <input className={classes.submit} onClick={() => { submitPost() }} type="submit" />

            <Link to='/data/preview-blog'>Preview Post</Link>
        </div>
    )
}

export default AddBlogPost;