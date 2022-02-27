import { Link } from 'react-router-dom';
import classes from './navigation.module.css';
import { FaBars } from 'react-icons/fa'

function NavigationBar() {
    return <nav className={classes.navBar}>
        <div>
            <Link className={classes.navItem} to='/my-webpage/'>Home</Link>
        </div>
        <FaBars className={classes.menu} />
        <div className={classes.navList}>
            <Link className={classes.navItem} to='/test'>Test Page</Link>
            <Link className={classes.navItem} to='/data'>Add Information</Link>
            <Link className={classes.navItem} to='/gallery'>Image Gallery</Link>
            <Link className={classes.navItem} to='/info'>About</Link>
        </div>
    </nav>
}

export default NavigationBar;