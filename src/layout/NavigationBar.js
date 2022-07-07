import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FaBars, FaRocket, FaHome } from "react-icons/fa";
import { useRef } from "react";
import MobileNavMenu from "./MobileNavMenu";
import DropdownMenu from "./DropdownMenu";
import LoginButton from "../components/LoginButton";

function NavigationBar(props) {
    const childRef = useRef();

    const navItems = (isMobile) => {
        let linkProps;
        let loginButtonProps;

        if (isMobile) {
            linkProps = {
                className: classes.navItem,
                onClick: () => childRef.current.closeMenu()
            }

            loginButtonProps = {
                className: [classes.navItem, classes.navLoginButton].join(' ')
            }
        }
        else {
            linkProps = {
                className: classes.menuItem
            }

            loginButtonProps = {
                className: [classes.menuItem, classes.menuLoginButton].join(' ')
            }
        }

        return (
            <>
                {/* <Link {...linkProps} to='/test'>Test Page</Link> */}
                {props.loginState &&
                    <>
                        <Link {...linkProps} to='/photo'>Add Photo</Link>
                        <Link {...linkProps} to='/data'>Add Information</Link>
                    </>
                }
                <Link {...linkProps} to='/gallery'>Image Gallery</Link>
                <Link {...linkProps} to='/colors'>Color References</Link>
                <Link {...linkProps} to='/projects'>Project Overviews</Link>
                <Link {...linkProps} to='/info'>About Me</Link>
                <LoginButton {...loginButtonProps} loginState={props.loginState} setLoginState={props.setLoginState} setUserState={props.setUserState} />
            </>
        )
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

        {/* Right desktop nav buttons */}
        <div className={classes.navList}>
            <DropdownMenu>
                {navItems(false)}
            </DropdownMenu>
        </div>

        {/* Hamburger menu for mobile */}
        <FaBars className={classes.mobileMenuButton} onClick={() => childRef.current.openMenu()} />
        <MobileNavMenu ref={childRef}>
            {navItems(true)}
        </MobileNavMenu>
    </nav>
}

export default NavigationBar;