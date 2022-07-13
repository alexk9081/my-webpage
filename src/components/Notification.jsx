import { useEffect, useState } from "react";

function Notification() {
    const [isActive, setIsActive] = useState(true);

    useEffect(() => {
        setTimeout(() => setIsActive(false), 1000);
    }, [])

    return ( isActive &&
        <div>
            This is a notification
        </div>
    )
}

export default Notification;