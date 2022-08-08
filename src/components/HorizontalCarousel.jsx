import classes from "./HorizontalCarousel.module.css";
import { useEffect, useState } from "react";

function HorizontalCarousel({ children }) {
    const [element, setElement] = useState(null);
    const [disableButtons, setDisableButtons] = useState(true);
    const [elementIndex, setElementIndex] = useState(0);

    useEffect(() => {
        if (children != null) {
            setElement(children[elementIndex]);
            setDisableButtons(false);
        };
    }, [children, elementIndex]);

    const prevElement = () => {
        if (elementIndex === 0) {
            setElementIndex(children.length - 1);
        }
        else {
            setElementIndex(elementIndex - 1);
        }

        setElement(children[elementIndex]);
    }

    const nextElement = () => {
        if (elementIndex === children.length - 1) {
            setElementIndex(0);
        }
        else {
            setElementIndex(elementIndex + 1);
        }

        setElement(children[elementIndex]);
    }

    return (
        <div className={classes.carousel}>
            <button onClick={prevElement} disabled={disableButtons} className={classes.buttons}>Prev</button>
            <div className={classes.contentHolder}>
                {element}
            </div>
            <button onClick={nextElement} disabled={disableButtons} className={classes.buttons}>Next</button>
        </div>
    )
}

export default HorizontalCarousel;