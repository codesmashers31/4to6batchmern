import { useState } from "react";
import { createUser } from "../services/api";

const AddUser = ({ fetchUsers }) => {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(form);
      fetchUsers();
      setForm({ name: "", mobile: "", email: "" });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add User</h3>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        type="number"
        name="mobile"
        placeholder="Mobile"
        value={form.mobile}
        onChange={handleChange}
      />

      <input
        type="email"
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <button type="submit">Add</button>
    </form>
  );
};

export default AddUser;