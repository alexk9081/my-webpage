import classes from "./LoginPage.module.css";
import { auth, provider } from "../firebaseConfig";
import { signInWithRedirect, signOut } from "firebase/auth";
import { useEffect } from "react";

function LoginPage(props) {
    let googleLogin = () => {
        console.log("clicked");
        signInWithRedirect(auth, provider);
        console.log("test");
    };

    let googleLogout = () => {
        signOut(auth).then(() => {
            console.log("User signed out");
        }).catch((error) => {
            console.log("An error occured");
            console.log(error);
        });
    }

    let getResults = () => {
        if (auth.currentUser == null) {
            console.log("No user logged in");
            return;
        }
        console.log(auth.currentUser.email);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                props.setLoginState(true);
            } else {
                props.setLoginState(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [props]);
    
    return <div className={classes.loginPage}>
        {props.loginState ?
            <>
                <h1 className={classes.title}>Google sign-out</h1>
                <button className={classes.loginButton} onClick={googleLogout}>Logout with Google</button>

                <h1 className={classes.title}>Results</h1>
                <button className={classes.loginButton} onClick={getResults}>Get result</button>
            </>
            :
            <>
                <h1 className={classes.title}>Google sign-in</h1>
                <button className={classes.loginButton} onClick={googleLogin}>Login with Google</button>
            </>
        }
    </div>
}

export default LoginPage;