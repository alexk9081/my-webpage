import classes from "./AddBlogPostPage.module.css";
import { useState } from "react";
import { Outlet } from "react-router-dom";

function AddInfoPage({ userName, userImg}) {
    const [body, setBody] = useState("");
    const [title, setTitle] = useState("");

    return (
        <div className={classes.addPostPage}>
            <div className={classes.aligner}>
                <Outlet context={[title, setTitle, body, setBody, userName, userImg]} />
            </div>
        </div>
    )
}

export default AddInfoPage;