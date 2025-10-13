import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
    return (
        <>
            <h1>Home.jsx</h1>
            <Link to = "/contact">Go to contact</Link>
        </>
    )
}
export default Home