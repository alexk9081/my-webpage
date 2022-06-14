import classes from "./loginPage.module.css"
import { auth, provider } from "../firebaseConfig"
import { signInWithRedirect, getRedirectResult, signOut, GoogleAuthProvider } from "firebase/auth"

function Login() {
    let googleLogin = () => {
        console.log("clicked");
        signInWithRedirect(auth, provider);
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
        getRedirectResult(auth)
        .then((result) => {
            if(result == null){
                console.log("No user logged in");
                return;
            }
            // This gives you a Google Access Token. You can use it to access Google APIs.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;

            // The signed-in user info.
            const user = result.user;
            console.log(user.displayName + " signed in using " + user.email);
            console.log("Verified: " + user.emailVerified);
            console.log("UID: " + user.uid);
            console.log("Metadata: Creation-" + user.metadata.creationTime + " LastSignin-" + user.metadata.lastSignInTime);
            console.log("User token: " + token);
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;

            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);

            console.log("Error signing in " + email + "::" + credential);
            console.log(errorCode + ": " + errorMessage);
            console.log(error);
        });
    }



    return <div>
        <h1 className={classes.general}>Google sign-in</h1>
        <button onClick={googleLogin}>Login with Google</button>

        <h1 className={classes.general}>Google sign-out</h1>
        <button onClick={googleLogout}>Logout with Google</button>

        <h1 className={classes.general}>Results</h1>
        <button onClick={getResults}>Get result</button>
    </div>
}

export default Login;