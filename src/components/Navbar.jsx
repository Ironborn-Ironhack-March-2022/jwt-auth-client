import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth.context";

function Navbar() {

    const { isLoggedIn, isLoading, user } = useContext(AuthContext);

    return (
        <nav className="Navbar">
            <NavLink to="/">Home</NavLink> |
            {isLoggedIn &&
                <span>Welcome</span>
            }

            {!isLoggedIn &&
                <>
                    <NavLink to="/signup">Register</NavLink> |
                    <NavLink to="/login">Login</NavLink>
                </>
            }
        </nav>
    );
}


export default Navbar;