import React from "react";
import './ReactTask.css';
import ViewData from "./ViewData.jsx";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <>
            <div className="header">
                    <Link to="/AddData">Add Data</Link>
                    <Link to="/ViewData">View Data</Link>
            
            
             </div>
        </>
    )
}
export default Header;