import React from "react";
import "./cardTask.css";


function CardTask(props) {
  console.log(props);

  return (
    <div className="card_parent">
      {
        props.MyData.map((ele) => {
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
}

export default CardTask;
