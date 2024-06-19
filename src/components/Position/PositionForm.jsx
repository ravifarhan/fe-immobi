import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createPosition } from "../../api/positionService";
import { getDepartments } from "../../api/departmentService";

const PositionForm = () => {
  const navigate = useNavigate();
  const [formPosition, setFormPosition] = useState({
    id_department: "",
    position_name: "",
  });
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPosition(formPosition);
      setFormPosition({
        ...formPosition,
      });
      navigate("/position");
    } catch (error) {
      console.error("Error creating position:", error);
    }
  };

  const handleChange = (e) => {
    setFormPosition({
      ...formPosition,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Box display="flex" flexDirection="column" minWidth="50%" p={4}>
      <Typography variant="h4" fontWeight="bold">
        Form Tambah Jabatan
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          name="position_name"
          label="Nama Jabatan"
          value={formPosition.position_name}
          onChange={handleChange}
          fullWidth
          sx={{ mt: 3, mb: 2 }}
        />
        <FormControl fullWidth sx={{ mb: 2 }}>
          <Select
            name="id_department"
            value={formPosition.id_department}
            onChange={handleChange}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="" disabled>
              Pilih Department
            </MenuItem>
            {departments.map((department) => (
              <MenuItem key={department.id} value={department.id}>
                {department.department_name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          sx={{ mr: 2 }}
        >
          Submit
        </Button>
        <Button
          onClick={() => navigate("/position")}
          variant="contained"
          color="inherit"
        >
          Cancel
        </Button>
      </form>
    </Box>
  );
};

export default PositionForm;
