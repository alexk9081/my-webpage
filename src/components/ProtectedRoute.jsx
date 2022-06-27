import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebaseConfig";
import Expire from "./Expire";


function ProtectedRoute({ component: Component, ...rest }) {
    let routingCondition = (props) => {
        if (auth.currentUser != null) {
            return <Component {...props} />
        }
        else {
            console.log("Unable to redirect");
            <Expire delay={10}>Error</Expire>
            return <Redirect to='/login' />
        }
    };

    return (
        <Route render= {routingCondition} {...rest} />
    );
};

export default ProtectedRoute;