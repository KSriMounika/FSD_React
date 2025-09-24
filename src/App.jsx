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


import React from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { useState , useEffect} from "react";
import './cardTask.css';

// function App(){
  //Empty Dependency Array
  // const [X, setX] = useState(0)
  //  useEffect ( () =>
  // {
  //   console.log('Executed')
  // },[]
  // );

  //Dependency array with dependency element x
  // const [X, setX] = useState(0)
  //  useEffect ( () =>
  // {
  //   console.log('Executed')
  // },[X]
  // );

  //No Dependency array 
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




function App ()
  {
    const [CompleteData, setCompleteData] = useState([
      {
        "name" : "Keerthi",
        "rollno" : "23P31A4235"
      },
      {
        "name" : "Tanuja",
        "rollno" : "23P31A4215"
      },
      {
        "name" : "Yakanksha",
        "rollno" : "23P31A4236"
      },
      {
        "name" : "Likitha",
        "rollno" : "23P31A4224"
      }


    ])
    const [QueryResult, setQueryResult] = useState([])
    const [UserQuery, setUserQuery] = useState(""); 

    const Capture = (event) => 
    {
    setUserQuery(event.target.value);
    };

  
  useEffect(() => {
    if (UserQuery != "") {
      
       setQueryResult(
        CompleteData.filter((ele) =>
          ele.name.includes(UserQuery) || ele.rollno.includes(UserQuery) 
        )
      );
    } 
    else
    {
      setQueryResult(CompleteData);
    }
  }, [UserQuery]);

    
    return (
      
      <>
       <input type="text" placeholder="Search..."
       onChange={
        (event) =>
        {
          Capture (event);
        }
       }
       />
       <div className="card_parent">
      {
        QueryResult.map((ele) => {
          return (
            <div className="card" >
               {ele.name }<br></br>
               {ele.rollno}
              
            </div>
          )
        })

      }
    </div>
     
      </>
    );
  }
export default App;


