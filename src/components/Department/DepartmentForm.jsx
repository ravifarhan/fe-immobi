import React, { useState } from "react";
import { createDepartment } from "../../api/departmentService";
import { TextField, Button, Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const DepartmentForm = () => {
  const navigate = useNavigate();
  const [formDepartment, setFormDepartment] = useState({
    department_name: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDepartment(formDepartment);
      setFormDepartment({
        ...formDepartment,
      });
      navigate("/department");
    } catch (error) {
      console.error("Error creating department:", error);
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
        Form Tambah Department
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="department_name"
          label="Nama Department"
          value={formDepartment.department_name}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        />
        <Button type="submit" variant="contained" color="primary" sx={{ mr: 2 }}>
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

export default DepartmentForm;
