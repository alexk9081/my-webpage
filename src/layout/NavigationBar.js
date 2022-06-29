import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FaBars, FaRocket, FaHome } from "react-icons/fa";
import { useRef } from "react";
import MobileNavMenu from "./MobileNavMenu";
import DropdownMenu from "./DropdownMenu";
import LoginButton from "../components/LoginButton";

function NavigationBar(props) {
    const childRef = useRef();

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
                <LoginButton className={[classes.menuItem, classes.menuLoginButton].join(' ')} loginState={props.loginState} setLoginState={props.setLoginState} setUserState={props.setUserState} />
            </DropdownMenu>
        </div>
        
        {/* Hamburger menu for mobile*/}
        <FaBars className={classes.mobileMenuButton} onClick={() => childRef.current.openMenu()} />
        <MobileNavMenu ref={childRef}>
            {props.loginState && 
                <>
                    <Link className={classes.navItem} onClick={() => childRef.current.closeMenu()} to='/photo'>Add Photo</Link>
                    <Link className={classes.navItem} onClick={() => childRef.current.closeMenu()} to='/data'>Add Information</Link>
                </>
            }
            <Link className={classes.navItem} onClick={() => childRef.current.closeMenu()} to='/gallery'>Image Gallery</Link>
            <Link className={classes.navItem} onClick={() => childRef.current.closeMenu()} to='/colors'>Color References</Link>
            <Link className={classes.navItem} onClick={() => childRef.current.closeMenu()} to='/info'>About Me</Link>
            {/* <Link className={classes.navItem} onClick={closeMenu} to='/test'>Test Page</Link> */}

            <LoginButton className={[classes.navItem, classes.navLoginButton].join(' ')} loginState={props.loginState} setLoginState={props.setLoginState} setUserState={props.setUserState} />
        </MobileNavMenu>
    </nav>
}

export default NavigationBar;