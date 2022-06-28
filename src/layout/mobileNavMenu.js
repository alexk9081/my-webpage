import { forwardRef, useState, useImperativeHandle } from "react";
import { FaTimes } from "react-icons/fa";
import classes from "./MobileNavMenu.module.css";

function MobileNavMenu(props, ref) {
    const [navMenuClasses, setNavMenuClasses] = useState([classes.navMenu]);

    useImperativeHandle(ref, () => ({
        openMenu() {
            setNavMenuClasses([classes.navMenu, classes.opened]);
        },
        closeMenu() {
            setNavMenuClasses([classes.navMenu]);
        }
    }));

    return <div className={navMenuClasses.join(' ')}>
        <FaTimes className={classes.closeBtn} onClick={() => setNavMenuClasses([classes.navMenu])} />
        {props.children}
    </div>
}

const forwardedChild = forwardRef(MobileNavMenu);

export default forwardedChild;