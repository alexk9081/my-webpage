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

    return <div>
        {
            text.map((info) => (
                <div key={info}>{info}</div>
            ))
        }
    </div>
}

export default IntroBox;