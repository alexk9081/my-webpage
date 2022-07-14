import { forwardRef, useState, useImperativeHandle } from "react";
import Notification from "./Notification";
import { v4 as uuidv4 } from 'uuid';
import classes from "./Notifications.module.css";

function NotificationList(props, ref) {
    const [notificationsList, setNotificationsList] = useState([]);

    useImperativeHandle(ref, () => ({
        addNotification(text) {
            createNotification(text);
        }
    }));


    function createNotification(notificationInfo) {
        setNotificationsList(notificationsList.concat(<Notification text={notificationInfo} key={uuidv4()} />));
    }

    return (
        <div className={classes.notificationsList}>
            {notificationsList}
        </div>
    )
}

const Notifications = forwardRef(NotificationList);

export default Notifications;