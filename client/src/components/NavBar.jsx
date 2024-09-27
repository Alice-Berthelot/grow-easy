import { Link } from "react-router-dom";

function NavBar() {

    return(
        <nav>
            <Link to="/"><img src="../src/assets/images/logo.ico" className="nav_logo"/></Link>
            <ul>
                <li><Link to="/">Accueil</Link></li>
                <li><Link to="/informations">Astuces</Link></li>
                <li><Link to="/aliments">Catégories</Link></li>
            </ul>
        </nav>
    )
}

export default NavBar