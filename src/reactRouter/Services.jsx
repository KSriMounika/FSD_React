import React from "react";
import { Link } from "react-router-dom";
const Services = () => {
    
    function Change() {
        window.location.href = "/PageNotFound";
    }
    return(
        <>
        <h1>Services.jsx</h1>
        <button onClick = {Change}>Go to PageNotFound</button>
        </>
    )
    
}
export default Services;