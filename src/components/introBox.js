import classes from './introBox.module.css'
import input from '../documents/intro.txt';
import { useState } from 'react';

function IntroBox() {
    const [text, setText] = useState([]);

    fetch(input)
        .then(data => data.text())
        .then(txt => {
            setText([txt])
        })

    return <div className={classes.intro}>
        <h1 className={classes.title}>Hello There!</h1>
        {
            text.map((info) => (
                <p key={info} className={classes.body}><pre className={classes.text}>{info}</pre></p>
            ))
        }
    </div>
}

export default IntroBox;