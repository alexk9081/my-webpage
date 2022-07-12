import classes from "./IntroBox.module.css";
import input from "../documents/intro.txt";
import { useEffect, useState } from "react";

function IntroBox() {
    const [text, setText] = useState([]);

    useEffect(() => {
        fetch(input)
            .then(data => data.text())
            .then(txt => setText(txt))
    }, [])

    return (
        <div className={classes.intro}>
            <h1 className={classes.title}>Hello There!</h1>
            {
                <div className={classes.body}>
                    <pre className={classes.text}>
                        {text}
                    </pre>
                </div>
            }
        </div>
    )
}

export default IntroBox;