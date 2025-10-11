
// import React, { useState, useEffect, useContext } from "react";
// import { useParams } from "react-router-dom";
// import Store from "./Store";

// function ViewDataInfo() {
//   const { ID } = useParams();
//   const { Data } = useContext(Store);
//   const [mycard, setMyCard] = useState(null);

//   useEffect(() => {
//     const found = Data.find((ele) => ele.ID == parseInt(ID));
//     if (found) {
//       setMyCard(found);
//     }
//   }, [Data, ID]);

//   if (!mycard) {
//     return <h3>Loading product details...</h3>;
//   }

//   return (
//     <div className="DetailedInfo">
//       <div>
//         <img
//           className="Img"
//           src={mycard.Image}
//           alt="Product"
//           width="200"
//           height="200"
//         />
//       </div>
//       <div>Description: {mycard.Description}</div>
//       <div>Price: {mycard.Price}</div>
//       <div>Brand: {mycard.Brand}</div>
//       <div>Size: {mycard.Size}</div>
//       <div>ID: {mycard.ID}</div>
//     </div>
//   );
// }

// export default ViewDataInfo;


import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ViewDataInfo({ data }) {
    const { ID } = useParams(); // get the ID from URL
    const [mycard, setMyCard] = useState(null);
    useEffect(() => {
        if (data && data.length > 0) {
            const card = data.find((ele) => ele.ID.toString() === ID);
            setMyCard(card || null);
        }
    }, [ID, data]);

    if (!mycard) return <div>Loading...</div>;

    return (
        <div className="DetailedInfo">
            <div>
                <img
                    src={mycard.Image}
                    alt={mycard.Brand}
                    style={{ width: "300px", height: "300px", objectFit: "cover" }}
                />
            </div>
            <div>Description: {mycard.Description}</div>
            <div>Price: {mycard.Price}</div>
            <div>Brand: {mycard.Brand}</div>
            <div>Size: {mycard.Size}</div>
            <div>ID: {mycard.ID}</div>
        </div>
    );
}

export default ViewDataInfo;

