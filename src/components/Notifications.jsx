import { useState } from "react";
import Notification from "./Notification";
import { v4 as uuidv4 } from 'uuid';
import classes from "./Notifications.module.css";

function Notifications() {
    const [notificationsList, setNotificationsList] = useState([]);

    function addNotifcation() {
        setNotificationsList(notificationsList.concat(<Notification key={uuidv4()} />));
    }

    return (
        <div className={classes.notificationsList}>
            <button onClick={addNotifcation}>Add Notification</button>
            {notificationsList}
        </div>
    )
}

export default Notifications;