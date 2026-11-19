import  { NavLink } from "react-router-dom"
import { rutasConNombre } from "../services/router";

export default function NotFound() {
    return (
        <>
            <h1>404 Pagina no encontrada</h1>
            <nav>
                <NavLink to={rutasConNombre.HOME}>Home</NavLink>
                | 
                <NavLink to={rutasConNombre.CONTACT}>Contact</NavLink>
            </nav>
        </>
           
    );
}
