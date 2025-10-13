import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import Store from "./Store";

function ViewData() {
  const { Data } = useContext(Store);
  const navigate = useNavigate();


  return (
    <div className="parent">
      {Data.map((ele) => (
        <div
          key={ele.ID}
          className="card"
          onClick={() => navigate(`/ViewDataInfo/${ele.ID}`)}
        >
          <div className="image-section">
            <img src={ele.Image} alt="Product" width="150" height="150" />
          </div>
          <div className="info-section">
            <div className="brand">Brand: {ele.Brand}</div>
            <div className="price">Price: {ele.Price}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewData;




// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./Product.css";

// function ViewData({ data }) {
//   const navigate = useNavigate();
//   const [search, setSearch] = useState("");

//   // ✅ Filter products based on search term (case-insensitive)
//   const filteredData = data.filter((ele) =>
//     [ele.Name, ele.Brand, ele.ID, ele.Price, ele.Size]
//       .some((field) =>
//         field?.toString().toLowerCase().includes(search.toLowerCase())
//       )
//   );

//   return (
//     <div>
//       {/* 🔍 Search Bar */}
//       <div className="search-container">
//         <input
//           type="text"
//           placeholder="Search by Name, Brand, or ID..."
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//           className="search-box"
//         />
//       </div>

//       {/* 🧩 Product Cards */}
//       <div className="parent">
//         {filteredData.length > 0 ? (
//           filteredData.map((ele) => (
//             <div
//               className="card"
//               key={ele.ID || Math.random()}
//               onClick={() => {
//                 if (ele.ID) navigate(`/ViewDataInfo/${ele.ID}`);
//                 else alert("Product has no ID!");
//               }}
//             >
//               <div className="image-section">
//                 <img src={ele.Image} alt={ele.Brand} />
//               </div>
//               <div className="info-section">
//                 <div className="brand">Brand: {ele.Brand}</div>
//                 <div className="price">Price: {ele.Price}</div>
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="no-results">No matching products found.</p>
//         )}
//       </div>
//     </div>
//   );
// }

// export default ViewData;
