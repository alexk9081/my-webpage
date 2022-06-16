import TestDiv from "../components/testDIv";
import PostForm from "../components/arrangements/blogPostForm.js";
import { useState } from "react";

function TestPage() {
    const [show, setShow] = useState(false);

    function flip() {
        setShow(!show);
    }

    return <div>

        Test Page

        {show && <p>show is true</p>}

        <button onClick={flip}>flip</button>
        <TestDiv></TestDiv>

        <PostForm />
    </div>
}

export default TestPage;