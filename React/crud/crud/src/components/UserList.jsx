import { deleteUser } from "../services/api";

const UserList = ({ users, fetchUsers, setEditId }) => {

  const handleDelete = async (id) => {
    try {
      await deleteUser(id);
      fetchUsers();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <h3>User List</h3>

      {!users || users.length === 0 ? (
        <p>No users found</p>
      ) : (
        users.map((user) => (
          <div key={user._id}>
            <p>{user.name}</p>
            <p>{user.mobile}</p>
            <p>{user.email}</p>

            <button onClick={() => setEditId(user._id)}>Edit</button>
            <button onClick={() => handleDelete(user._id)}>Delete</button>
          </div>
        ))
      )}
    </div>
  );
};

export default UserList;