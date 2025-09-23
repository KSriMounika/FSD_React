import React, { useState } from "react";
import "./HookComponent1.css";



const HookComponent1 = () => {
  const [data, setData] = useState(0);

  const onChange = () => {
    setData(data + 1);
  };

  return (
    <div className="counter-container">
      <h1>Count: {data}</h1>
      <button onClick={onChange} className="b1">ClickMe</button>
      {/* <button onClick={() => setData(data - 1)}>Decrement</button>
      <button onClick={() => setData(0)}>Reset</button> */}
    </div>
  );
};

export default HookComponent1;

