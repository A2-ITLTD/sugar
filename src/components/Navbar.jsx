import { Link } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div className="navbar bg-base-100 px-5 md:px-28">
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
                    <a>Products</a>
                    <ul className="p-2">
                        <li><a>Refined Sugar (lcumsa 45)</a></li>
                        <li><a>Refined Sugar (lcumsa 100)</a></li>
                        <li><a>Refined Sugar (lcumsa 150)</a></li>
                        <li><a>Brown Sugar (lcumsa 600 & 1200)</a></li>
                        <li><a>Mitr Phol Pure Refined Sugar</a></li>
                        <li><a>Renuka</a></li>
                    </ul>
                    </li>
                    <li><a>Contact Us</a></li>
                    <li><a>About Us</a></li>
                </ul>
                </div>
                <a className="btn btn-ghost text-xl">Sugar</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg font-semibold text-orange-400">
                <li><a>Home</a></li>
                <li>
                    <details>
                    <summary>Products</summary>
                    <ul className="p-2 w-72">
                        <li><a>Refined Sugar (lcumsa 45)</a></li>
                        <li><a>Refined Sugar (lcumsa 100)</a></li>
                        <li><a>Refined Sugar (lcumsa 150)</a></li>
                        <li><a>Brown Sugar (lcumsa 600 & 1200)</a></li>
                        <li><a>Mitr Phol Pure Refined Sugar</a></li>
                        <li><a>Renuka</a></li>
                    </ul>
                    </details>
                </li>
                <li><a>Contact Us</a></li>
                <li><a>About Us</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
        
    );
};

export default Navbar;