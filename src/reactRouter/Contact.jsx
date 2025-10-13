import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {

    function Change() {
        window.location.href = "/Services";
    }
    return(
        <>
        <h1>Contact.jsx</h1>
        <button onClick = {Change}>Go to Services</button>
        </>
    )
}
export default Contact;