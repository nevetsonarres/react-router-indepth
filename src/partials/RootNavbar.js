import { NavLink } from "react-router-dom";
import Breadcrumbs from "./Breadcrumbs";

const RootNavbar = () => {
    return (
        <header>
            <nav>
                <h1>Jobstreet</h1>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='about'>About</NavLink>
                <NavLink to='help'>Help</NavLink>
                <NavLink to='careers'>Careers</NavLink>
            </nav>
            <Breadcrumbs/>
        </header>
    );
}

export default RootNavbar;