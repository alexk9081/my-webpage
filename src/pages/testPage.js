import TestDiv from "../components/TestDiv";
import { useState } from "react";
import ProjectCard from "../components/ProjectCard";

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

        <ProjectCard />
    </div>
}

export default TestPage;