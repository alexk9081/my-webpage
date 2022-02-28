import { forwardRef, useState, useImperativeHandle } from 'react';
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import classes from './navMenu.module.css';

function NavMenu(props, ref) {
    const [navMenuClasses, setNavMenuClasses] = useState([classes.menu]);

    useImperativeHandle(ref, () => ({
        
        openMenu() {
            setNavMenuClasses([classes.menu, classes.opened]);
        }

    }));
    

    function closeMenu() {
        setNavMenuClasses([classes.menu]);
    }

    return <div className={navMenuClasses.join(' ')}>
        <FaTimes className={classes.closeBtn} onClick={closeMenu}/>
        <Link className={classes.navItem} onClick={closeMenu}   to='/gallery'>Image Gallery</Link>
        <Link className={classes.navItem} to='/info'>About Me</Link>
    </div>
}

const forwardedChild = forwardRef(NavMenu);

export default forwardedChild;