import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 className="NavTitle">BANCO DE DADOS UNIVERSITÁRIO</h1>
            <button className="btn btn-primary mt-5">
            <Link className="Links" to="/">HOME</Link>
            </button>               
        </nav>
     );
}
 
export default Navbar;