import axios from "axios";

const API_URL = "http://localhost:3000/api/position";

export const createPosition = async (body) => {
  try {
    return await axios.post(API_URL, body);
  } catch (error) {
    console.log(error);
  }
};

export const getPositions = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error("Error fetching positions:", error);
    throw error;
  }
};

export const getPositionById = async (id) => {
  return await axios.get(`${API_URL}/${id}`);
};

// export const getPositionByDepartmentId = async (departmentId) => {
//   return await axios.get(`${API_URL}/by-department/${departmentId}`);
// };

export const getPositionByDepartment = async (departmentId) => {
  try {
    const response = await axios.get(
      `${API_URL}/by-department/${departmentId}`
    );
    console.log("Positions data:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching positions by department:", error)
    throw error
  }
};

export const updatePosition = async (id, body) => {
  return await axios.patch(`${API_URL}/${id}`, body);
};

export const deletePosition = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};
