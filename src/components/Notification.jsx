import { useEffect, useState } from "react";
import classes from "./Notification.module.css";

function Notification({ text, color }) {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsActive(false), 1500);
    }, [])

    return (isActive &&
        <div className={classes.notification} style={{backgroundColor: color}} onClick={() => setIsActive(false)}>
            {text}
        </div>
    )
}

Notification.defaultProps = {
    text: "This is a notification",
    color: "#800"
}

export default Notification;