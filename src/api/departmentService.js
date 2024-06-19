import axios from "axios";

const API_URL = "http://localhost:3000/api/department";

export const createDepartment = async (body) => {
  try {
    return await axios.post(API_URL, body);
  } catch (error) {
    console.log(error);
  }
};

export const getDepartments = async () => {
  return await axios.get(API_URL);
};

export const getDepartmentById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

export const updateDepartment = async (id, body) => {
  return await axios.patch(`${API_URL}/${id}`, body);
};

export const deleteDepartment = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
