import { Link } from 'react-router-dom';
import classes from './navigation.module.css';
import { FaBars, FaRocket } from 'react-icons/fa';
import { useRef } from 'react';
import NavMenu from './navMenu';

function NavigationBar() {
    const childRef = useRef();

    function showNavMenu() {
        childRef.current.openMenu();
    }

    return <nav className={classes.navBar}>
        <div>
            <Link className={classes.navItem} to='/my-webpage/'>Home</Link>
        </div>

        <FaRocket className={classes.logo} />
        
        <div className={classes.navList}>
            {/* <Link className={classes.navItem} to='/test'>Test Page</Link> */}
            {/* <Link className={classes.navItem} to='/data'>Add Information</Link> */}
            <Link className={classes.navItem} to='/gallery'>Image Gallery</Link>
            <Link className={classes.navItem} to='/info'>About Me</Link>
        </div>
        
        <FaBars className={classes.mobileMenuButton} onClick={showNavMenu} />
        <NavMenu ref={childRef}/>
    </nav>
}

export default NavigationBar;