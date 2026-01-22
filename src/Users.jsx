import { useEffect, useState } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);
  const [Username, setUsername] = useState("");
  const [Password, setPassword] = useState("");

  const fetchUsers = async () => {
    const res = await axios.get("http://localhost:9000/api/get");
    setUsers(res.data);
  };

  const deleteUser = async (id) => {
    await axios.delete(`http://localhost:9000/api/delete/${id}`);
    fetchUsers();
  };

  const startEdit = (user) => {
    setEditId(user._id);
    setUsername(user.Username);
    setPassword(user.Password);
  };

  const updateUser = async () => {
    await axios.put(`http://localhost:9000/api/update/${editId}`, {
      Username,
      Password
    });
    setEditId(null);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <h2>User Cards</h2>

      {users.map(u => (
        <div key={u._id}
          style={{ border: "1px solid", margin: 10, padding: 10 }}>

          {editId === u._id ? (
            <>
              <input
                value={Username}
                onChange={e => setUsername(e.target.value)}
              />
              <input
                value={Password}
                onChange={e => setPassword(e.target.value)}
              />
              <br />
              <button onClick={updateUser}>Update</button>
              <button onClick={() => setEditId(null)}>Cancel</button>
            </>
          ) : (
            <>
              <p><b>Username:</b> {u.Username}</p>
              <p><b>Password:</b> {u.Password}</p>
              <button onClick={() => startEdit(u)}>Edit</button>
              <button onClick={() => deleteUser(u._id)}>Delete</button>
            </>
          )}
        </div>
      ))}
    </>
  );
}

export default Users;
