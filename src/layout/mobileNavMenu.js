import { forwardRef, useState, useEffect, useImperativeHandle } from "react";
import { FaTimes } from "react-icons/fa";
import classes from "./MobileNavMenu.module.css";

function MobileNavMenu(props, ref) {
    const [isDesktop, setDesktop] = useState(window.innerWidth > 764);
    const [navMenuClasses, setNavMenuClasses] = useState([classes.navMenu]);

    useImperativeHandle(ref, () => ({
        openMenu() {
            setNavMenuClasses([classes.navMenu, classes.opened]);
        },
        closeMenu() {
            setNavMenuClasses([classes.navMenu]);
        }
    }));

    const updateMedia = () => {
        setDesktop(window.innerWidth > 764);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });



    return <div className={navMenuClasses.join(' ')}>
        <FaTimes className={classes.closeBtn} onClick={() => setNavMenuClasses([classes.navMenu])} />
        {!isDesktop && props.children}
    </div>
}

const forwardedChild = forwardRef(MobileNavMenu);

export default forwardedChild;