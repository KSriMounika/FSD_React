import React from "react";
import './Header.css';
import { Link } from "react-router-dom";

const Navbar = () =>{

    return(
        <div>
            <div className="parent">
                <ul className="child">
                <li className="subchild">
                    <Link to="/">Home</Link>
                </li>
                <li className="subchild">
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li className="subchild">
                    <Link to="/about">About</Link>
                </li>
                </ul>

            </div>
        </div>
    )
}
export default Navbar;