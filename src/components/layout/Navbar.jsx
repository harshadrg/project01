import { NavLink } from "react-router-dom";

function Navbar() {
    return (
        <>
            <nav>
                <NavLink to='/'>
                    Home
                </NavLink>
                <NavLink to='about-us'>
                    About us
                </NavLink>
                <NavLink to='services'>
                    Service
                </NavLink>
                <NavLink to='contact'>
                    Contact
                </NavLink> 
            </nav>

        </>
    )
}
export default Navbar;