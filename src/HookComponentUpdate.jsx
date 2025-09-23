import React, { useState } from "react";
import "./HookComponent1.css";


const HookComponentUpdate = () => {
  const [data, setData] = useState([1,2,3]);

  const Change = () => {
    setData([...data,100]);
  };

  return (
   
   <>
      {data.map((ele) => {
        return <h1 >{ele}</h1>; 
      })}

      <button onClick={Change}>Update</button>
    </>
     
   
  );
};


export default HookComponentUpdate;

