// import React, { useState, useContext } from "react";
// import Store from "./Store";

// const Form = () => {
//   const { Data, setData } = useContext(Store);

//   const [formData, setFormData] = useState({
//     ID: "",
//     Name: "",
//     Image: null,
//     Brand: "",
//     Price: "",
//     Size: "",
//     Description: ""
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (event) => {
//     const file = event.target.files[0];
//     if (file) {
//       const path = URL.createObjectURL(file);
//       setFormData((prev) => ({ ...prev, Image: path }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!formData.ID) {
//       alert("Please enter a unique ID");
//       return;
//     }

//     const exists = Data.some((item) => item.ID === formData.ID);
//     if (exists) {
//       alert("This ID already exists!");
//       return;
//     }

//     setData((prev) => [...prev, formData]);
//     alert("Product added!");

  
//     setFormData({
//       ID: "",
//       Name: "",
//       Image: null,
//       Brand: "",
//       Price: "",
//       Size: "",
//       Description: ""
//     });
//   };

//   return (
//     <form >
//       <div className="Parent">
//         <label>ID:</label>
//         <input
//           type="number"
//           placeholder="Enter ID"
//           name="ID"
//           value={formData.ID}
//           onChange={handleChange}
//         />

//         <label>Name:</label>
//         <input
//           type="text"
//           placeholder="Enter Product Name"
//           name="Name"
//           value={formData.Name}
//           onChange={handleChange}
//         />

//         <label>Price:</label>
//         <input
//           type="text"
//           placeholder="Enter Price"
//           name="Price"
//           value={formData.Price}
//           onChange={handleChange}
//         />

//         <label>Brand:</label>
//         <input
//           type="text"
//           placeholder="Enter Brand"
//           name="Brand"
//           value={formData.Brand}
//           onChange={handleChange}
//         />

//         <label>Size:</label>
//         <input
//           type="text"
//           placeholder="Enter Size"
//           name="Size"
//           value={formData.Size}
//           onChange={handleChange}
//         />

//         <label>Description:</label>
//         <textarea
//           placeholder="Write Description..."
//           name="Description"
//           value={formData.Description}
//           onChange={handleChange}
//         ></textarea>

//         <label>Image:</label>
//         <input
//           type="file"
//           name="Image"
//           accept="image/*"
//           onChange={handleImageChange}
//         />
//         <input type="submit" value="Submit" onClick={handleSubmit} />
//         <input type="reset" value="Clear" />
//       </div>
//     </form>
//   );
// };

// export default Form;




import React, { useState } from "react";

const Form = ({ setData }) => {

    const [formData, setFormData] = useState({
        ID: '',
        Name: '',
        Image: null,
        Brand: '',
        Price: '',
        Size: '',
        Description: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const path = URL.createObjectURL(file);
            setFormData(prev => ({ ...prev, Image: path }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!formData.ID) {
            alert("Please enter a unique ID");
            return;
        }

        setData(prev => [...prev, formData]); 
        alert("Product added!");

      
        setFormData({ ID: '', Name: '', Image: null, Brand: '', Price: '', Size: '', Description: '' });
    };


    return (
        <>

            <form>
                <div className="Parent">

                    <label>ID:</label>
                    <input type="number" placeholder="Enter ID" name="ID" onChange={handleChange} />

                    <label>Name:</label>
                    <input type="text" placeholder="Enter Product Name" name="Name" onChange={handleChange} />

                    <label>Price:</label>
                    <input type="text" placeholder="Enter Price" name="Price" onChange={handleChange} />

                    <label>Brand:</label>
                    <input type="text" placeholder="Enter Brand" name="Brand" onChange={handleChange} />
                    <label>Size:</label>
                    <input type="text" placeholder="Enter Size" name="Size" onChange={handleChange} />

                    <label>Description:</label>
                    <textarea placeholder="Write Description..." name="Description" onChange={handleChange}></textarea>

                    <label>Image:</label>
                    <input type="file" name="Image" accept="image/*" onChange={handleImageChange} />

                    <input type="submit" value="Submit" onClick={handleSubmit} />
                    <input type="reset" value="Clear" />
                </div>
            </form>
        </>

    );
};

export default Form;

