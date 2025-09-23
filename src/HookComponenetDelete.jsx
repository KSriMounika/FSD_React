import React, { useState } from "react";
import "./HookComponent1.css";


const HookComponentDelete = () => {
  const [data, setData] = useState([1,2,3]);

  const Change = (deleteindex) => {
    var arr = data.filter((ele, index) => index != deleteindex);
    setData(arr)
  };

  return (
   
   <>
      {data.map((ele, index) => {
        return <h1 >{ele}</h1>; 
      })}

      <button onClick={Change}>Delete</button>
    </>
     
   
  );
};


export default HookComponentDelete;

