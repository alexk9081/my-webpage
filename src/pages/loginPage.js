import classes from "./LoginPage.module.css";
import { auth, provider } from "../firebaseConfig";
import { signInWithRedirect, signOut } from "firebase/auth";
import { useState, useEffect } from "react";

function Login() {
    const [loggedIn, setLoggedIn] = useState(false);

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
                setLoggedIn(true);
            } else {
                setLoggedIn(false);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, []);

    return <div>
        {loggedIn ?
            <>
                <h1 className={classes.general}>Google sign-out</h1>
                <button onClick={googleLogout}>Logout with Google</button>

                <h1 className={classes.general}>Results</h1>
                <button onClick={getResults}>Get result</button>
            </>
            :
            <>
                <h1 className={classes.general}>Google sign-in</h1>
                <button onClick={googleLogin}>Login with Google</button>
            </>
        }
    </div>
}

export default Login;