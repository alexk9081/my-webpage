import { forwardRef, useState, useImperativeHandle } from "react";
import Notification from "./Notification";
import { v4 as uuidv4 } from 'uuid';
import classes from "./Notifications.module.css";

function NotificationList(_props, ref) {
    const [notificationsList, setNotificationsList] = useState([]);

    useImperativeHandle(ref, () => ({
        addNotification(notificationInfo, notificationColor) {
            if(notificationsList.length === 3){
                notificationsList.pop();
            }
            setNotificationsList([<Notification text={notificationInfo} color={notificationColor} key={uuidv4()} />].concat(notificationsList));
        }
    }));

    return (
        <div className={classes.notificationsList}>
            {notificationsList}
        </div>
    )
}

const Notifications = forwardRef(NotificationList);

export default Notifications;