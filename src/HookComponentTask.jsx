import React, { useState } from "react";
import "./HookComponent1.css";



const HookComponentTask = () => {
  const [data, setData] = useState([]);

  const cards = () => {
    setData(
     { Image: hair1, Price: 1100, Brand: "FaceWash" },
     { Image: hair2, Price: 1200, Brand: "Shampoo" },
     { Image: hair3, Price: 1300, Brand: "Accessories" },
     { Image: hair4, Price: 1400, Brand: "Soap" },
     { Image: hair5, Price: 1500, Brand: "Slippers" },
     { Image: hair6, Price: 1600, Brand: "TShirt" },
     { Image: hair7, Price: 1700, Brand: "FormalShirt" },
     { Image: hair8, Price: 1800, Brand: "Saree" }
    );
  };

  return (
   
    <div className="card_parent">
      {
        data.map((ele) => {
          return (
            <div className="card" >
              <div className="image-section">
                <img src={ele.Image} />
              </div>
              <div className="info-section">
                <div className="brand">Brand: {ele.Brand}</div>
                <div className="price">Price: {ele.Price}</div>
              </div>
            </div>
          )
        })

      }
    </div>
  );
 
};

export default HookComponentTask;

