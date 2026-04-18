import axios from "axios";

const BASE_URL = "http://localhost:5000/api/adding";

export const createUser = async (data) => {
  return await axios.post(`${BASE_URL}/insert`, data);
};

export const getUsers = async () => {
  return await axios.get(`${BASE_URL}/getting`);
};

export const deleteUser = async (id) => {
  return await axios.delete(`${BASE_URL}/deletedata/${id}`);
};

export const getUserById = async (id) => {
  return await axios.get(`${BASE_URL}/gettingbyid/${id}`);
};

export const updateUser = async (id, data) => {
  return await axios.put(`${BASE_URL}/updatedata/${id}`, data);
};