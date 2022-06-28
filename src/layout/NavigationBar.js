import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FaBars, FaRocket, FaHome } from "react-icons/fa";
import { useRef } from "react";
import NavMenu from "./MobileNavMenu";
import DropdownMenu from "./DropdownMenu";
import LoginButton from "../components/LoginButton";

function NavigationBar(props) {
    const childRef = useRef();

    function showNavMenu() {
        childRef.current.openMenu();
    }

    return <nav className={classes.navBar}>
        {/* Left home button */}
        <div>
            <Link className={classes.homeNav} to='/my-webpage'>
                <FaHome className={classes.homeIcon} />
                Home
            </Link>
        </div>

        {/* Middle icon */}
        <FaRocket className={classes.logo} />
        
        {/* Right nav buttons  */}
        <div className={classes.navList}>
            <DropdownMenu>
                {/* <Link className={classes.navItem} to='/test'>Test Page</Link> */}
                {props.loginState && 
                <>
                    <Link className={classes.menuItem} to='/photo'>Add Photo</Link>
                    <Link className={classes.menuItem} to='/data'>Add Information</Link>
                </>
                }
                <Link className={classes.menuItem} to='/gallery'>Image Gallery</Link>
                <Link className={classes.menuItem} to='/colors'>Color References</Link>
                <Link className={classes.menuItem} to='/info'>About Me</Link>
                <LoginButton className={[classes.menuItem, classes.menuButtonItem].join(' ')} loginState={props.loginState} setLoginState={props.setLoginState}></LoginButton>
            </DropdownMenu>
        </div>
        
        {/* Hamburger menu for mobile*/}
        <FaBars className={classes.mobileMenuButton} onClick={showNavMenu} />
        <NavMenu ref={childRef}/>
    </nav>
}

export default NavigationBar;