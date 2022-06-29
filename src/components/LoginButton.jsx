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

    //Changes logged in state after redirect completes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                props.setLoginState(true);
                props.setUserState(user);
            } else {
                props.setLoginState(false);
                props.setUserState(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [props]);
    

    if(props.loginState) {
        return <button className={props.className} onClick={googleLogout}>Logout</button>
 
    }
    else{
        return <button className={props.className} onClick={googleLogin}>Login with Google</button>
    }
}

export default LoginPage;