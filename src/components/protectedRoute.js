import { Route, Redirect } from "react-router-dom";
import { auth } from "../firebaseConfig";

function ProtectedRoute({ component: Component, ...rest }) {
    return (
        <Route
            {...rest}
            render={(props) =>
                auth.currentUser != null ? (
                    <Component {...props} />
                ) : (
                    <Redirect to='/login' />
                )
            }
        />
    );
};

export default ProtectedRoute;