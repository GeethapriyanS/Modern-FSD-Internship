import { Link } from "react-router-dom"
const Navbar=()=>{
    return(
        <div className="navbar">
           <Link className="navbar-item" to="/">Home</Link>
           <Link className="navbar-item" to="/contact">Contact</Link>
           <Link className="navbar-item" to="/user">User</Link>
           <Link className="navbar-item" to="/about">About</Link>          
        </div>
    )
}
export default Navbar;