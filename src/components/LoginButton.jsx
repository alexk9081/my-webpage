import { auth, provider } from "../firebaseConfig";
import { signInWithRedirect, signOut } from "firebase/auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";


function LoginButton({ className, isLoggedInState, setIsLoggedInState, setUserState }) {
    const navigate = useNavigate();

    const googleLogin = () => {
        navigate('/my-webpage');
        signInWithRedirect(auth, provider);
    };

    const googleLogout = () => {
        navigate('/my-webpage');
        signOut(auth).catch((error) => console.log("Error Occured: " + error));
    }

    //Changes logged in state after redirect completes
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if (user) {
                setIsLoggedInState(true);
                setUserState(user);
            } else {
                setIsLoggedInState(false);
                setUserState(null);
            }
        });

        // Cleanup subscription on unmount
        return () => unsubscribe();
    }, [setIsLoggedInState, setUserState]);


    const authButton = () => {
        if (isLoggedInState) {
            return <button className={className} onClick={googleLogout}>Logout</button>

        }
        else {
            return <button className={className} onClick={googleLogin}>Login with Google</button>
        }
    }

    return (
        <>
            {authButton()}
        </>
    )
}

LoginButton.propTypes = {
    isLoggedInState: PropTypes.bool.isRequired,
    setUserState: PropTypes.func.isRequired,
    setIsLoggedInState: PropTypes.func.isRequired,
    className: PropTypes.string
}

export default LoginButton;