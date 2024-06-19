import axios from "axios";

const API_URL = "http://localhost:3000/api/employee";

export const createEmployee = async (body) => {
  try {
    return await axios.post(API_URL, body);
  } catch (error) {
    console.log(error);
  }
};

export const getEmployees = async () => {
  return await axios.get(API_URL);
};

export const getEmployeeById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const updateEmployee = async (id, body) => {
  return await axios.patch(`${API_URL}/${id}`, body);
};

export const deleteEmployee = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
