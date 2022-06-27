import React, { useEffect, useState } from "react";
import classes from "./Expire.module.css";

function Expire(props) {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setVisible(false);
        }, props.delay);
        return () => clearTimeout(timer)
    }, [props.delay]);

    return visible ? <div className={classes.errorMessage}>{props.children}</div> : <div className={classes.errorMessage} />;
}

export default Expire;