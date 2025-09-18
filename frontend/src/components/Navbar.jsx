import { NavLink } from "react-router-dom";

import  "./style/Navbar.css"

const Navbar = () => {
    return (
        <nav id="navbar">
            <NavLink to={"/"}>
                <h2>Party Time!</h2>
            </NavLink>
            
            <ul>
                <li>
                    <NavLink to={"/"}>Minhas Festas</NavLink>
                </li>
                <li>
                    <NavLink to={"/party/new"} className="btn">Criar Festa</NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar