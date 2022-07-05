import classes from "./AddInfoPage.module.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
            userDisplayName: props.location.state.props.loginState.displayName,
            userImageUrl: props.location.state.props.loginState.photoURL,
            date: Timestamp.fromDate(new Date())
        };

        // await addDoc(blogPostData, docData);

        navigate('/my-webpage');
    }
    return <div className={classes.addPostPage}>
        <div className={classes.aligner}>
            <input className={classes.titleInput} onChange={(newTitleInput) => { setTitle(newTitleInput.target.value) }} type="text" placeholder="Title" />
            <textarea className={classes.bodyInput} onChange={(newBodyInput) => { setBody(newBodyInput.target.value) }} type="text" placeholder="Body" />
            <input className={classes.submit} onClick={() => {submitPost()}} type="submit" />
        </div>
    </div>
}

export default AddInfoPage;