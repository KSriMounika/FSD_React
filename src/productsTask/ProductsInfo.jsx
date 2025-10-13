import React from "react";
import { useState, useEffect } from "react";
import hair1 from "./assets/hair1.png";
import hair2 from "./assets/hair2.png";
import hair3 from "./assets/hair3.png";
import { useParams } from "react-router-dom";



function ProductInfo(){
    const Data = [
             
            { ID :'1',Image: hair1, Price: 1100, Brand: "FaceWash" , Description: "Dummy Info about Facewash"},
            { ID :'2',Image: hair2, Price: 1200, Brand: "Shampoo",Description: "Dummy Info about shampoo" },
            { ID :'3',Image: hair3, Price: 1300, Brand: "Accessories",Description: "Dummy Info about Accessories" }
    ]
    const ReceivedData = useParams();
    const [mycard, setmycard] = useState(null)
    useEffect(() =>{

        Data.filter(ele => {

            if(ele.ID == parseInt(ReceivedData.ID)){
                setmycard(ele)
            }
        })

    },[])
    return(
       
            mycard?
            <div className="DetailedInfo">
            <div>Image: {mycard.Image}</div>
            <div>Description: {mycard.Description}</div>
            <div>Price: {mycard.Price}</div>
            <div>Brand: {mycard.Brand}</div>
            </div>
            :<></>
        
    )
}
export default ProductInfo;