import axios from 'axios';

const API_URL = 'http://localhost:3000/api/employee';

export const getEmployees = () => axios.get(API_URL);
export const createEmployee = (data) => axios.post(API_URL, data);
export const updateEmployee = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deleteEmployee = (id) => axios.delete(`${API_URL}/${id}`);
