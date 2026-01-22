// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import CardTask from './CardTask'
// import  CardTask1 from './Ecommercewebsite.jsx'
// import './App.css'
// import hair1 from "./assets/hair1.png";
// import hair2 from "./assets/hair2.png";
// import hair3 from "./assets/hair3.png";
// import hair4 from "./assets/hair4.png";
// import hair5 from "./assets/hair5.png";
// import hair6 from "./assets/hair6.png";
// import hair7 from "./assets/hair7.png";
// import hair8 from "./assets/hair8.png";
// import HookComponent1 from "./HookComponent1";
// import HookComponentTask from './HookComponentTask';
// import HookComponent2 from './HookComponentUpdate';
// import HookComponentUpdate from './HookComponentUpdate';


// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App



// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>

//          <CardTask />
//     </>
//   )
// }

// export default App


// const cards = [
//   { Image: "./react.svg", Price: 1100, Brand: "Rare Rabbit" },
//   { Image: "./react.svg", Price: 1200, Brand: "CK" },
//   { Image: "./react.svg", Price: 1300, Brand: "UK Polo" },
//   { Image: "./react.svg", Price: 1400, Brand: "Zudio" },
//   { Image: "./react.svg", Price: 1500, Brand: "Puma" },
//   { Image: "./react.svg", Price: 1600, Brand: "Ram Raj" },
//   { Image: "./react.svg", Price: 1700, Brand: "Lenin" },
//   { Image: "./react.svg", Price: 1800, Brand: "Ford" },
//   { Image: "./react.svg", Price: 1900, Brand: "Rare Rabbit" },
//   { Image: "./react.svg", Price: 2000, Brand: "CK" }
// ];

// function App() {
//   return (

//         <CardTask MyData={cards} />


//   );
// }

// export default App;


// const cards = [
//   { Image: hair1, Price: 1100, Brand: "FaceWash" },
//   { Image: hair2, Price: 1200, Brand: "Shampoo" },
//   { Image: hair3, Price: 1300, Brand: "Accessories" },
//   { Image: hair4, Price: 1400, Brand: "Soap" },
//   { Image: hair5, Price: 1500, Brand: "Slippers" },
//   { Image: hair6, Price: 1600, Brand: "TShirt" },
//   { Image: hair7, Price: 1700, Brand: "FormalShirt" },
//   { Image: hair8, Price: 1800, Brand: "Saree" },

// ];
// function App() {
//   return (

//         <CardTask1 MyData={cards} />


//   );
// }

// export default App;




// function App() {
//   return (
//     <div className="parent">
//       <HookComponent1 />
//     </div>
//   );
// }

// export default App;




// function App() {
//   return (
//     <div className="parent">
//       <HookComponentTask />
//     </div>
//   );
// }

// export default App;




// function App() {
//   return (
//     <div className="parent">
//       <HookComponentUpdate />
//     </div>
//   );
// }

// export default App;




// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./Task.css";
// import { useState } from "react";
// function App() {

//   const Fun = () => {
//     setData([...Data, userData]);
//     userData = {
//       firstname: "",
//       lastname: "",
//       email: "",
//     };
//   };

//   var userData = {
//     firstname: "",
//     lastname: "",
//     email: "",
//   };

//   const [Data, setData] = useState([]);

//   const GetData = (key, event) => {
//     userData[key] = event.target.value;
//   };

//   return (
//     <>
//       <form>
//         <div>
//           <label>First Name : </label>
//           <input
//             type="text"
//             onChange={(event) => GetData("firstname", event)}
//           />
//         </div>
//         <div>
//           <label>Last Name : </label>
//           <input type="text" onChange={(event) => GetData("lastname", event)} />
//         </div>
//         <div>
//           <label>Email : </label>
//           <input type="email" onChange={(event) => GetData("email", event)} />
//         </div>
//       </form>
//       <button onClick={Fun}>Add Data</button>

//       <div className="parent">
//         {Data.map((ele, index) => {
//           return (
//             <div className="child">
//               <div>First Name : {ele.firstname}</div>
//               <div>Last Name : {ele.lastname}</div>
//               <div>Email : {ele.email}</div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

// export default App;

// 


// import React from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import { useState , useEffect} from "react";
// import './cardTask.css';

// function App(){
//   // Empty Dependency Array
//   const [X, setX] = useState(0)
//    useEffect ( () =>
//   {
//     console.log('Executed')
//   },[]
//   );

//   Dependency array with dependency element x
//   const [X, setX] = useState(0)
//    useEffect ( () =>
//   {
//     console.log('Executed')
//   },[X]
//   );

//   No Dependency array 
//   const [X, setX] = useState(0)
//    useEffect ( () =>
//   {
//     console.log('Executed')
//   }
//   );
//   return (
//     <>
//       <h1>Value of X: {X}</h1>
//       <button onClick={() => setX(X+1)}>Add Data</button>

      
//     </>
//   );
// }

// export default App;




// Renders many times so it is side effect of an useEffect
// function App ()
//   {
//     const[X, setX] = useState(0);
//     const timer = setInterval(() => 
//     {
//         setX(c => c+1);

//     }, 1000)
//     return (
//       <>
//       <h1>Count: {X}</h1>
//       </>
//     );
//   }
// export default App;


// function App ()
//   {
//     const[X, setX] = useState(0);
//     useEffect( ()=>
//     {
//       const timer = setInterval(() => 
//       {
//           setX(c => c+1);

//       }, 1000)
//     })
//     return (
//       <>
//       <h1>Count: {X}</h1>
//       </>
//     );
//   }
// export default App;


// function App ()
//   {
//     const[X, setX] = useState(0);
//     useEffect( ()=>
//     {
//       const timer = setInterval(() => 
//       {
//           setX(c => c+1);

//       }, 1000)

//       return () => clearInterval(timer)
//     })
//     return (
//       <>
//       <h1>Count: {X}</h1>
//       </>
//     );
//   }
// export default App;




// function App ()
//   {
//     const [CompleteData, setCompleteData] = useState([
//       {
//         "name" : "Keerthi",
//         "rollno" : "23P31A4235"
//       },
//       {
//         "name" : "Tanuja",
//         "rollno" : "23P31A4215"
//       },
//       {
//         "name" : "Yakanksha",
//         "rollno" : "23P31A4236"
//       },
//       {
//         "name" : "Likitha",
//         "rollno" : "23P31A4224"
//       }


//     ])
//     const [QueryResult, setQueryResult] = useState([])
//     const [UserQuery, setUserQuery] = useState(""); 

//     const Capture = (event) => 
//     {
//     setUserQuery(event.target.value); //To get what user typed
//     };

  
//   useEffect(() => {
//     if (UserQuery != "") {
      
//        setQueryResult(
//         CompleteData.filter((ele) =>
//           ele.name.includes(UserQuery) || ele.rollno.includes(UserQuery) 
//         )
//       );
//     } 
//     else
//     {
//       setQueryResult(CompleteData);
//     }
//   }, [UserQuery]);

    
//     return (
      
//       <>
//        <input type="text" placeholder="Search..."
//        onChange={
//         (event) =>
//         {
//           Capture (event);
//         }
//        }
//        />
//        <div className="card_parent">
//       {
//         QueryResult.map((ele) => {
//           return (
//             <div className="card" >
//                {ele.name }<br></br>
//                {ele.rollno}
              
//             </div>
//           )
//         })

//       }
//     </div>
     
//       </>
//     );
//   }
// export default App;




// import "./TodoApp.css";

// function TodoApp() {
//   const [tasks, setTasks] = useState([]);
//   const [newTask, setNewTask] = useState("");
//   const [editId, setEditId] = useState(null);
//   const [editText, setEditText] = useState("");

//   // Add Task
//   const addTask = (e) => {
//     e.preventDefault();
//     if (!newTask.trim()) return;
//     setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
//     setNewTask("");
//   };


//   // Delete Task
//   const deleteTask = (id) => setTasks(tasks.filter((t) => t.id !== id));

//   // Toggle Complete
//   const toggleComplete = (id) =>
//     setTasks(
//       tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
//     );
  
    
//   // Start Editing
//   const startEdit = (id, text) => {
//     setEditId(id);
//     setEditText(text);
//   };

//   // Save Edited Task
//   const saveEdit = (id) => {
//     if (!editText.trim()) return;
//     setTasks(tasks.map((t) => (t.id === id ? { ...t, text: editText } : t)));
//     setEditId(null);
//     setEditText("");
//   };

  

//   return (
//     <div className="container">
//       <h2>✅ Todo List</h2>

//       {/* Add Task */}
//       <form onSubmit={addTask} className="inputBox">
//         <input
//           type="text"
//           value={newTask}
//           onChange={(e) => setNewTask(e.target.value)}
//           placeholder="Enter a new task"
//         />
//         <button type="submit">Add</button>
//       </form>

//       {/* Task List */}
//       <ul className="list">
//         {tasks.map((task) => (
//           <li key={task.id} className="listItem">
//             <input
//               type="checkbox"
//               checked={task.completed}
//               onChange={() => toggleComplete(task.id)}
//             />

//             {editId === task.id ? (
//               <input
//                 type="text"
//                 value={editText}
//                 onChange={(e) => setEditText(e.target.value)}
//                 className="editInput"
//               />
//             ) : (
//               <span className={task.completed ? "taskText completed" : "taskText"}>
//                 {task.text}
//               </span>
//             )}

//             {editId === task.id ? (
//               <button onClick={() => saveEdit(task.id)} className="actionBtn save">
//                 Save
//               </button>
//             ) : (
//               <button
//                 onClick={() => startEdit(task.id, task.text)}
//                 className="actionBtn edit"
//               >
//                 Edit
//               </button>
//             )}

//             <button onClick={() => deleteTask(task.id)} className="actionBtn delete">
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default TodoApp;

// import React from "react";
// import Navbar from './Navbar';
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Home from "./Home";
// import Dashboard from "./Dashboard";
// import About from "./About";

// const App = () => {
//   return (

//      <div>
//       <BrowserRouter>
//       <Navbar />
//       <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/dashboard" element={<Dashboard />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//       </BrowserRouter>
//      </div>
//   )
// }
// export default App;


//Reactr Router DOM CONCEPT
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './Home';
// import Contact from './contact';
// import Services from './Services';
// import PageNotFound from './PageNotFound';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
//           {/* <Route path="/home" element={<Home />} /> */}
//           <Route path="/" element={<Home />} /> 
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/services" element={<Services />} />
//           <Route path="*" element = {<PageNotFound />} />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;




//Product-Task Sending info b/w 2 routes
// import React from 'react';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import ProductCards from './ProductCards';
// import ProductsInfo from './ProductsInfo';

// function App() {
//   return (
//     <>
//       <BrowserRouter>
//         <Routes>
         
//           <Route path="/" element={<ProductCards />} /> 
//           <Route path="/product-info/:ID" element={<ProductsInfo />} />
          
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }

// export default App;


//Images Method-1 TemporaryLink
// import React from 'react';
// import { useState } from 'react';
// function App()
// {
//   const[ImagePath, setImagePath] = useState(null)
//   const GetData = (event) => {
//     const file = event.target.files[0]
//     const path = URL.createObjectURL(file)
//     console.log(path)
//     setImagePath(path)
//   }
//   return(
//     <>
//     <input type = "file" onChange={(event) => GetData(event)} />
//     {
//        ImagePath? <img src={ImagePath} alt='Image Cracked'/>: <></>
//     }
//     </>
  
//   )
// }
// export default App;


//Image Method-2 Convert to base-64
// import React from 'react';
// import { useState } from 'react';
// function App()
// {
//   const[ImagePath, setImagePath] = useState(null)
//   const GetData = (event) => {
//     const file = event.target.files[0]
//     const reader = new FileReader()
//     reader.readAsDataURL(file)
//     reader.onload = () => {
        
//         console.log(reader.result)
//         setImagePath(reader.result)
       
//     }
    
//   }
//   return(
//     <>
//     <input type = "file" onChange={(event) => GetData(event)} />
//     {
//        ImagePath? <img src={ImagePath} alt='Image Cracked'/>: <></>
//     }
//     </>
  
//   )
// }
// export default App;

//useContext





// react-countup
// import React from "react";
// import CountUp from "react-countup";
// function App(){
//   return(
//       <h1>
//         <CountUp 
         
//          end = {50}
//          duration={5}
         
//         />
//       </h1>
//   );
// }
// export default App;


//react-tilty
// import React from "react";
// import Img  from "./assets/react.svg"
// import Tilty from "react-tilty";
// function App(){
//   return(
//      <div class="App">
//       <Tilty>
//         <img src = {Img} />

//       </Tilty>
//     </div>
//   );
// }
// export default App;

//react-toastify
// import React from "react";
// import { ClipLoader } from "react-spinners";

// function App(){

//   const notify = () => toast('Sucessful...');
//   return(
//      <div>
//       <button onClick={notify}>Make me a toast</button>
//       <Toaster />
//     </div>

//   );
// }
// export default App;



//react-loader-spinner
// import React from "react";
// import { RotatingLines } from "react-loader-spinner";

// function App() {
//   return (
//     <div className="loader_spinner" >
//       <RotatingLines
//         strokeColor="white"
//         strokeWidth="4"
//         animationDuration="0.75"
//         width="100"
//         visible={true}
//       />
//     </div>
//   );
// }

// export default App;

// react-confetti
// import React from "react";
// import Confetti from "react-confetti";
// function App() {
//   return (
//     <Confetti 
//      numberOfPieces = {100}
//      gravity = {0.3}
//     />
//   );
// }
// export default App;

// import React from "react";
// import SimpleSlider from "./reactSlickPage/myslick";

// const App = () => {

//   return(
//     <SimpleSlider />
//   )
// }

// export default App;



// App.jsx
// import React from 'react';
// import './ReactTask.css';
// import AppRoutes from './reactCompleteTask/AppRoutes';

// function App() {
//   return <AppRoutes />;
// }

// export default App;





// import React from 'react';
// import Pages from './useContext/Pages';

// function App() {
//   return <Pages />;
// }
// export default App;



// import React from 'react';
// import ApexChart from './dashboard/ApexChart.jsx';
// import QueryCards from './dashboard/QueryCards.jsx';

// function App() {
//   return <ApexChart />;
//   return <QueryCards />;
// }
// export default App;



//API Calling
import react from "react";
// import './App.css';
// import axios from "axios";
// function App() {
//   let baseURL = "http://localhost:7010";
//   const fetchData = () => {
//     // axios.get(`${baseURL}/get-student`)
//     axios.get("http://localhost:7010/get-student")
//     .then((result) => console.log(result.data))
//     .catch((error) => console.log(error))
   
//   };
//   let myuser = {
//          name : "Anju",
//          "role" : "Doctor",
//          "College" : "RMC"
//   };
//   const addData = () => {
//     axios.post(`${baseURL}/add-student`, myuser)
//     .then((result) => console.log(result.data))
//     .catch((error) => console.log(error))
   
//   };
//   return(
//     <>
//     <h1>This is my frontend</h1>
//     <button onClick={fetchData}>Fetch Data</button>
//     <button onClick={addData}>add Data</button>
//     </>
//   )
// }
// export default App;


// import { useState } from "react";
// import StudentForm from "./StudentForm";
// import StudentList from "./StudentList";

// function App() {
//   const [refreshFlag, setRefreshFlag] = useState(false);

//   const refresh = () => setRefreshFlag(!refreshFlag);

//   return (
//     <>
//       <StudentForm refresh={refresh} />
//       <StudentList refreshFlag={refreshFlag} />
//     </>
//   );
// }

// export default App;





// import React, { useState } from "react";

// import axios from "axios";

// function App() {
//   const [name, setName] = useState("");
//   const [rollno, setRollno] = useState("");
//   const [branch, setBranch] = useState("");

//   const addData = (e) => {
//     e.preventDefault();

//     axios
//       .post("http://localhost:9000/add-data", {
//         name,
//         rollno,
//         branch,
//       })
//       .then((result) => {
//         console.log(result.data);
//         alert("Data added successfully");
//       })
//       .catch((error) => console.log(error));
//   };

//   return (
//     <>
//       <form onSubmit={addData}>
//         <label>Name: </label>
//         <input
//           type="text"
//           placeholder="Enter Name"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//         /><br /><br />

//         <label>Roll No: </label>
//         <input
//           type="number"
//           placeholder="Enter Roll No"
//           value={rollno}
//           onChange={(e) => setRollno(e.target.value)}
//         /><br /><br />

//         <label>Branch: </label>
//         <input
//           type="text"
//           placeholder="Branch"
//           value={branch}
//           onChange={(e) => setBranch(e.target.value)}
//         /><br /><br />

//         <button type="submit">Add Data</button>
//       </form>
//     </>
//   );
// }

// export default App;
// import { useState } from "react";
// import axios from "axios";
// import "./App.css";

// function App() {
//   const [id, setId] = useState("");
//   const [addName, setAddName] = useState("");

//   const [targetId, setTargetId] = useState("");
//   const [updateName, setUpdateName] = useState("");

//   const [data, setData] = useState([]);

//   const addData = async () => {
//     await axios.post("http://localhost:9000/post-data", {
//       id: Number(id),
//       name: addName,
//     });
//     setId("");
//     setAddName("");
//     getData();
//   };

//   const getData = async () => {
//     const res = await axios.get("http://localhost:9000/get-data");
//     setData(res.data);
//   };

//   const deleteData = async () => {
//     await axios.delete(`http://localhost:9000/delete/${targetId}`);
//     setTargetId("");
//     getData();
//   };

//   const updateData = async () => {
//     await axios.put(`http://localhost:9000/update/${targetId}`, {
//       name: updateName,
//     });
//     setTargetId("");
//     setUpdateName("");
//     getData();
//   };

//   return (
//     <div className="app">
//       <h2>Product Manager</h2>
//       <div className="form">
//         <input
//           type="number"
//           placeholder="Add ID"
//           value={id}
//           onChange={(e) => setId(e.target.value)}
//         /><br /><br />
//         <input
//           type="text"
//           placeholder="Add Name"
//           value={addName}
//           onChange={(e) => setAddName(e.target.value)}
//         /><br /><br />
//         <button onClick={addData}>Add</button>
//       </div>

//       <div className="form">
//         <input
//           type="number"
//           placeholder="Update/Delete ID"
//           value={targetId}
//           onChange={(e) => setTargetId(e.target.value)}
//         />
//         <input
//           type="text"
//           placeholder="New Name"
//           value={updateName}
//           onChange={(e) => setUpdateName(e.target.value)}
//         />
//         <button onClick={updateData}>Update</button>
//         <button onClick={deleteData}>Delete</button>
//       </div>

//       <button className="fetch" onClick={getData}>
//         Get Data
//       </button>

//     <ul className="list">
//         {data.map((item) => (
//           <li key={item.id}>
//             <span>{item.id}</span>
//             <span>{item.name}</span>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default App;
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import AddUser from "./AddUser";
// import Users from "./Users";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<AddUser />} />
//         <Route path="/users" element={<Users />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;

// import { useState } from "react";

// function App() {
//   const [message, setMessage] = useState("");
//   const [user, setUser] = useState(null);
//   const [loading, setLoading] = useState(false);

//   const createToken = async () => {
//     setLoading(true);
//     setUser(null);
//     setMessage("Creating token...");

//     try {
//       const res = await fetch("http://localhost:5000/api/login", {
//         method: "GET",
//         credentials: "include"
//       });

//       if (!res.ok) {
//         setMessage(` Create Token failed (Status: ${res.status})`);
//         setLoading(false);
//         return;
//       }

//       await res.json();
//       setMessage(" Token created successfully. Now click Verify Token.");
//       setLoading(false);
//     } catch (err) {
//       setMessage(" Backend not reachable. Is server running?");
//       setLoading(false);
//     }
//   };

//   const verifyToken = async () => {
//     setLoading(true);
//     setUser(null);
//     setMessage("Verifying token...");

//     try {
//       const res = await fetch("http://localhost:5000/api/send-mail", {
//         method: "GET",
//         credentials: "include"
//       });

//       if (res.status === 401) {
//         setMessage("Unauthorized: Token missing or expired. Click Create Token again.");
//         setLoading(false);
//         return;
//       }

//       if (!res.ok) {
//         setMessage(` Verification failed (Status: ${res.status})`);
//         setLoading(false);
//         return;
//       }

//       const data = await res.json();
//       setMessage("Token verified successfully!");
//       setUser(data.user);
//       setLoading(false);
//     } catch (err) {
//       setMessage(" Verification failed. Server error.");
//       setLoading(false);
//     }
//   };

//   return (
//     <div style={container}>
//       <h2>JWT Authentication (React)</h2>

//       <button onClick={createToken} disabled={loading} style={btn}>
//         Create Token
//       </button>

//       <button onClick={verifyToken} disabled={loading} style={btn}>
//         Verify Token
//       </button>

//       {loading && <p>⏳ Processing...</p>}

//       {message && <p style={messageStyle}>{message}</p>}

//       {user && (
//         <pre style={box}>
// {JSON.stringify(user, null, 2)}
//         </pre>
//       )}
//     </div>
//   );
// }

// const container = {
//   padding: "40px",
//   fontFamily: "Arial",
//   maxWidth: "500px"
// };

// const btn = {
//   padding: "10px 20px",
//   marginRight: "10px",
//   cursor: "pointer"
// };

// const messageStyle = {
//   marginTop: "15px",
//   fontWeight: "bold"
// };

// const box = {
//   marginTop: "20px",
//   background: "#f4f4f4",
//   padding: "15px",
//   borderRadius: "5px"
// };

// export default App;


import { useState } from "react";
import axios from "axios";

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleUpload = async () => {
    if (!file) {
      alert("Select a file first");
      return;
    }

    const formData = new FormData();
    formData.append("file", file); // MUST be "file"

    try {
      const res = await axios.post(
        "http://localhost:9000/api/file-upload",
        formData
      );
      console.log(res.data);
      alert("Upload successful");
    } catch (err) {
      console.error(err.response?.data || err.message);
      alert("Upload failed");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setFile(e.target.files[0])}
      />
      <br /><br />
      <button onClick={handleUpload}>Upload</button>
    </div>
  );
}

export default FileUpload;
