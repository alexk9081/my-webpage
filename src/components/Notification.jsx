import { useCallback, useEffect, useState } from "react";
import classes from "./Notification.module.css";

function Notification({ text, color }) {
    const [isActive, setIsActive] = useState(true);
    const [notificationStyle, setNotificationStyle] = useState({backgroundColor: color});

    const unloadNotification = useCallback(() => {
        setNotificationStyle({...notificationStyle, opacity: 0});
        setTimeout(() => setIsActive(false), 1000);
    }, [notificationStyle])
    
    useEffect(() => {
        setTimeout(() => unloadNotification(), 1500);
    }, [unloadNotification])

    return (isActive &&
        <div className={classes.notification} style={notificationStyle} onClick={() => unloadNotification()}>
            {text}
        </div>
    )
}

Notification.defaultProps = {
    text: "This is a notification",
    color: "#800"
}

export default Notification;