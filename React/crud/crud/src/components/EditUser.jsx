import { useEffect, useState } from "react";
import { getUserById, updateUser } from "../services/api";

const EditUser = ({ editId, fetchUsers, setEditId }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
  });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchUser = async () => {
    try {
      const res = await getUserById(editId);
      setForm(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (editId) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      fetchUser();
    }
  }, [editId, fetchUser]);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      await updateUser(editId, form);
      fetchUsers();
      setEditId(null);
    } catch (err) {
      console.log(err);
    }
  };

  if (!editId) return null;

  return (
    <form onSubmit={handleUpdate}>
      <h3>Edit User</h3>

      <input
        type="text"
        name="name"
        placeholder="Enter name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        type="tel"
        name="mobile"
        placeholder="Enter mobile number"
        value={form.mobile}
        onChange={handleChange}
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Enter email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <button type="submit">Update</button>
    </form>
  );
};

export default EditUser;