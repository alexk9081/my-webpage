import TestDiv from "../components/TestDiv";
import { useState } from "react";
import HorizontalCarousel from "../components/HorizontalCarousel";

function TestPage() {
    const [show, setShow] = useState(false);

    function flip() {
        setShow(!show);
    }

    return (
        <div>
            Test Page
            {show && <p>show is true</p>}
            <button onClick={flip}>flip</button>
            <TestDiv></TestDiv>

            <HorizontalCarousel>
                <div>Div 1</div>
                <div>Div 2</div>
                <div>Div 3</div>
            </HorizontalCarousel>

        </div>
    )
}

export default TestPage;