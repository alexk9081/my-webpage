import classes from "./AddInfoPage.module.css";
import {useState} from "react";
import {addDoc} from "firebase/firestore";
import {firestore} from "../firebaseConfig";

function AddInfoPage() {
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");

    return <div className={classes.addPostPage}>
        <div className={classes.aligner}>
            <input className={classes.titleInput} onChange={(newTitleInput) => {setTitle(newTitleInput.target.value)}} type="text" placeholder="Title"/>
            <input className={classes.bodyInput} onChange={(newBodyInput) => {setBody(newBodyInput.target.value)}} type="text" placeholder="Body"/>
            <input className={classes.submit} onClick={() => {console.log(body)}} type="submit"/>
        </div>
    </div>
}

export default AddInfoPage;