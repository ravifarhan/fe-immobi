import React, { useState, useEffect } from "react";
import {
  getDepartmentById,
  updateDepartment,
} from "../../api/departmentService";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";

const DepartmentEditForm = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [formDepartment, setFormDepartment] = useState({
    department_name: "",
  });

  useEffect(() => {
    const fetchDepartment = async () => {
      try {
        const response = await getDepartmentById(id);
        setFormDepartment(response.data);
      } catch (error) {
        console.error("Error fetching department:", error);
      }
    };
    fetchDepartment();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateDepartment(id, formDepartment);
      navigate("/department");
    } catch (error) {
      console.error("Error updating department:", error);
    }
  };

  const handleChange = (e) => {
    setFormDepartment({
      ...formDepartment,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box display="flex" flexDirection="column" minWidth="50%" p={4}>
      <Typography variant="h4" fontWeight="bold">
        Form Edit Department
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="department_name"
          label="Nama Department"
          value={formDepartment.department_name}
          onChange={handleChange}
          fullWidth
          margin="normal"
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          Submit
        </Button>
        <Button
          onClick={() => navigate("/department")}
          variant="contained"
          color="inherit"
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default DepartmentEditForm;
