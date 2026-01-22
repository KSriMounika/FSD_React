import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddUser() {
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate();

  const addData = async () => {
    await axios.post("http://localhost:9000/api/add", {
      Username,
      Password
    });
    alert("Data Added");
  };

  return (
    <>
      <h2>Add User</h2>
      <input placeholder="Username"
        onChange={e => setUsername(e.target.value)} />
      <input placeholder="Password"
        onChange={e => setPassword(e.target.value)} />
      <br /><br />
      <button onClick={addData}>Add</button>
      <button onClick={() => navigate("/users")}>Get Data</button>
    </>
  );
}

export default AddUser;
