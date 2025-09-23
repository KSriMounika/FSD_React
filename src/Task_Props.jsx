import React, { useState } from "react";
// import Component from "./Task_Props";
// const Data = ({name, mydata}) => {

//     console.log(mydata)

//     return (
//         <h1>{name}</h1>
//     )
// }

// export default Data;

const Component = () =>
{
   const [data, setData] = useState(1)
   const OnChange = () =>
   {
      setData(data => data+1);
      setData(data => data+1);
      setData(data => data+1);
      setData(data => data+1);
   }
  
   return (
   
     <>
       <button onClick={OnChange}>Click Me{data}</button>
     </>

   )
}
export default Component;
