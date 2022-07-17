import { Link } from "react-router-dom";
import classes from "./NavigationBar.module.css";
import { FaBars, FaRocket, FaHome } from "react-icons/fa";
import { useRef } from "react";
import MobileNavMenu from "./MobileNavMenu";
import DropdownMenu from "./DropdownMenu";
import LoginButton from "../components/LoginButton";

function NavigationBar(props) {
    const mobileMenuRef = useRef();

    const mobileItems = (isMobile) => {
        let linkProps;
        let loginButtonProps;

        if (isMobile) {
            linkProps = {
                className: classes.mobileMenuItem,
                onClick: () => mobileMenuRef.current.closeMenu()
            }

            loginButtonProps = {
                className: [classes.mobileMenuItem, classes.mobileMenuItemLoginButton].join(' ')
            }
        }
        else {
            linkProps = {
                className: classes.menuItem
            }

            loginButtonProps = {
                className: [classes.menuItem, classes.menuItemLoginButton].join(' ')
            }
        }

        return (
            <>
                {/* <Link {...linkProps} to='/test'>Test Page</Link> */}
                {props.isLoggedInState &&
                    <>
                        <Link {...linkProps} to='/photo'>Add Photo</Link>
                        <Link {...linkProps} to='/data'>Add Information</Link>
                    </>
                }
                <Link {...linkProps} to='/gallery'>Image Gallery</Link>
                <Link {...linkProps} to='/colors'>Color References</Link>
                <Link {...linkProps} to='/projects'>Project Overviews</Link>
                <Link {...linkProps} to='/info'>About Me</Link>
                <LoginButton {...loginButtonProps} isLoggedInState={props.isLoggedInState} setIsLoggedInState={props.setIsLoggedInState} setUserState={props.setUserState} />
            </>
        )
    }

    return (
        <nav className={classes.navBar}>
            {/* Left home button */}
            <div>
                <Link className={classes.homeNavButton} to='/my-webpage'>
                    <FaHome className={classes.homeIcon} />
                    Home
                </Link>
            </div>

            {/* Middle icon */}
            <FaRocket className={classes.logo} />

            {/* Right desktop nav buttons */}
            <div className={classes.menu}>
                <DropdownMenu>
                    {mobileItems(false)}
                </DropdownMenu>
            </div>

            {/* Hamburger menu for mobile */}
            <FaBars className={classes.mobileMenuButton} onClick={() => mobileMenuRef.current.openMenu()} />
            <MobileNavMenu ref={mobileMenuRef}>
                {mobileItems(true)}
            </MobileNavMenu>
        </nav>
    )
}

export default NavigationBar;