import { Link } from "react-router-dom";
import logo from '../Images/logo-removebg.png';
const Navbar = () => {
    
    return (
        <div className="navbar bg-base-100 px-5 md:px-28 relative z-50">
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16" />
                    </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-semibold text-orange-400">
                    <Link to="/"><a>Home</a></Link>
                    <li>
                    <a><Link to="/allproducts">Products</Link></a>
                    <ul className="p-2">
                        <Link  to={`/item/5`}><li><a>Refined Sugar (lcumsa 45)</a></li></Link>
                        <Link  to={`/item/3`}><li><a>Refined Sugar (lcumsa 100)</a></li></Link>
                        <Link  to={`/item/4`}><li><a>Refined Sugar (lcumsa 150)</a></li></Link>
                        <Link  to={`/item/1`}><li><a>Brown Sugar (lcumsa 600 & 1200)</a></li></Link>
                        <Link  to={`/item/2`}><li><a>Mitr Phol Pure Refined Sugar</a></li></Link>
                        <Link  to={`/item/6`}><li><a>Renuka</a></li></Link>
                    </ul>
                    </li>
                    <li><Link to="/contact"><a>Contact Us</a></Link></li>
                    <li><Link to="/about"><a>About Us</a></Link></li>
                </ul>
                </div>
                <Link to="/" className="btn btn-ghost text-xl">
                    <img src={logo} className="w-full h-full" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-orange-400">
                <li><Link to="/"><a>Home</a></Link></li>
                <li>
                    <details>
                    <summary><Link to="/allproducts">Products</Link></summary>
                    <ul className="p-2 w-72">
                        <Link  to={`/item/5`}><li><a>Refined Sugar (lcumsa 45)</a></li></Link>
                        <Link  to={`/item/3`}><li><a>Refined Sugar (lcumsa 100)</a></li></Link>
                        <Link  to={`/item/4`}><li><a>Refined Sugar (lcumsa 150)</a></li></Link>
                        <Link  to={`/item/1`}><li><a>Brown Sugar (lcumsa 600 & 1200)</a></li></Link>
                        <Link  to={`/item/2`}><li><a>Mitr Phol Pure Refined Sugar</a></li></Link>
                        <Link  to={`/item/6`}><li><a>Renuka</a></li></Link>
                    </ul>
                    </details>
                </li>
                <li><Link to="/contact"><a>Contact Us</a></Link></li>
                <li><Link to="/about"><a>About Us</a></Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Growers</a>
            </div>
        </div>
        
    );
};

export default Navbar;