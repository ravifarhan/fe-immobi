import axios from 'axios';

const API_URL = 'http://localhost:3000/api/position';

export const getPositions = () => axios.get(API_URL);
export const createPosition = (data) => axios.post(API_URL, data);
export const updatePosition = (id, data) => axios.put(`${API_URL}/${id}`, data);
export const deletePosition = (id) => axios.delete(`${API_URL}/${id}`);
