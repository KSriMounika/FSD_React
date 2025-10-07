import React from "react";
import hair1 from "./assets/hair1.png";
import hair2 from "./assets/hair2.png";
import hair3 from "./assets/hair3.png";
import './Product.css';
function ProductCards() {
    const Data = [
        
    { ID :'1',Image: hair1, Price: 1100, Brand: "FaceWash" , Description: "Dummy Info about Facewash"},
    { ID :'2',Image: hair2, Price: 1200, Brand: "Shampoo",Description: "Dummy Info about shampoo" },
    { ID :'3',Image: hair3, Price: 1300, Brand: "Accessories",Description: "Dummy Info about Accessories" }
        
    ]
    return(
        <div className="parent">
            {
                Data.map(ele =>
                {
                    return(
                        <div className="card" onClick={() => window.location.href = `./product-info/${ele.ID}`}>
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
    )
}
export default ProductCards;