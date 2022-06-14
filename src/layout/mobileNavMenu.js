import { forwardRef, useState, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import classes from './mobileNavMenu.module.css';

function NavMenu(props, ref) {
    const [navMenuClasses, setNavMenuClasses] = useState([classes.navMenu]);

    useImperativeHandle(ref, () => ({
        openMenu() {
            setNavMenuClasses([classes.navMenu, classes.opened]);
        }
    }));


    function closeMenu() {
        setNavMenuClasses([classes.navMenu]);
    }

    return <div className={navMenuClasses.join(' ')}>
        <FaTimes className={classes.closeBtn} onClick={closeMenu} />
        {/* <Link className={classes.navItem} onClick={closeMenu} to='/test'>Test Page</Link> */}
        <Link className={classes.navItem} onClick={closeMenu} to='/data'>Add Information</Link>
        <Link className={classes.navItem} onClick={closeMenu} to='/gallery'>Image Gallery</Link>
        <Link className={classes.navItem} onClick={closeMenu} to='/info'>About Me</Link>
    </div>
}

const forwardedChild = forwardRef(NavMenu);

export default forwardedChild;