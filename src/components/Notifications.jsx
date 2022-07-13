import { useState } from "react";
import Notification from "./Notification";
import { v4 as uuidv4 } from 'uuid';


function Notifications() {
    const [notificationsList, setNotificationsList] = useState([]);

    function addNotifcation() {
        setNotificationsList(notificationsList.concat(<Notification key={uuidv4()} />));
    }

    return (
        <div>
            <button onClick={addNotifcation}>Add Notification</button>
            {notificationsList}
        </div>
    )
}

export default Notifications;