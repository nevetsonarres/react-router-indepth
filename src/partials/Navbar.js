import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <header>
            <nav>
                <h1>Jobstreet </h1>
                {/* <Link to='/'>Home</Link> */}
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
            </nav>
        </header>
    );
}

export default Navbar;