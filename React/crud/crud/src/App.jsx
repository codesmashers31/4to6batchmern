import { useEffect, useState } from "react";
import { getUsers } from "./services/api";

import AddUser from "./components/AddUser";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";

function App() {
  const [users, setUsers] = useState([]);
  const [editId, setEditId] = useState(null);

  const fetchUsers = async () => {
    try {
      const res = await getUsers();
      // Ensure res.data is an array
      setUsers(Array.isArray(res.data) ? res.data : []);
    } catch (err) {
      console.log(err);
      setUsers([]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h2>CRUD App</h2>

      <AddUser fetchUsers={fetchUsers} />

      <EditUser
        editId={editId}
        fetchUsers={fetchUsers}
        setEditId={setEditId}
      />

      <UserList
        users={users}
        fetchUsers={fetchUsers}
        setEditId={setEditId}
      />
    </div>
  );
}

export default App;