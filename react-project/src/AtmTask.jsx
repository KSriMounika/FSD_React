import React from "react";
import "./AtmTask.css";
import chip1 from "./chip1.jpg";
const AtmTask = () => 
{
    return (
        <div className="Parent">
            <div className = "Child1"></div>
            <div className ="Child2"></div>
            <p className="para">World</p>
            <p className="para6">debit</p>
            <p className="para1">mastercard</p>
            <img src={chip1} style= {{position: "relative", bottom: 95, left:-86, width: 80, height:45 }}/>
            <p className="para2">5412 7512 3412 3456</p>
            <p className="para5">VALID TIME</p>
            <p className="para3">12/23</p>
            <p className="para4">Lee M. Cardholder</p> 
        </div>
    )
  
}
export default AtmTask;