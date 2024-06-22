import React, { useState, useEffect } from "react";
import {
  TextField,
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  Grid,
  FormLabel,
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { createEmployee } from "../../api/employeeService";
import { getDepartments } from "../../api/departmentService";
import { getPositionByDepartment } from "../../api/positionService";

const EmployeeForm = () => {
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    id_position: "",
    id_department: "",
    age: "",
    gender: "",
    birth_date: "",
    address: "",
  });
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchDepartments = async () => {
      try {
        const response = await getDepartments();
        setDepartments(response.data);
      } catch (error) {
        console.error("Error fetching departments:", error);
      }
    };

    fetchDepartments();
  }, []);

  const handleDepartmentChange = async (e) => {
    const { value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      id_department: value,
    }));

    try {
      const positionsData = await getPositionByDepartment(value);
      setPositions(positionsData);
    } catch (error) {
      console.error("Error fetching positions:", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevEmployee) => ({
      ...prevEmployee,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee(employee);
      navigate("/employee");
    } catch (error) {
      console.error("Error creating employee:", error);
    }
  };

  return (
    <Box display="flex" flexDirection="column" p={4}>
      <Typography variant="h4" fontWeight="bold">
        Form Input Karyawan
      </Typography>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <TextField
              name="name"
              label="Nama"
              value={employee.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl component="fieldset" fullWidth>
              <FormLabel>Jenis Kelamin</FormLabel>
              <RadioGroup
                row
                name="gender"
                value={employee.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="Laki-laki"
                  control={<Radio />}
                  label="Laki-laki"
                />
                <FormControlLabel
                  value="Perempuan"
                  control={<Radio />}
                  label="Perempuan"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="age"
              label="Usia"
              type="number"
              value={employee.age}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              name="birth_date"
              label="Tanggal Lahir"
              type="date"
              value={employee.birth_date}
              onChange={handleChange}
              fullWidth
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Departemen</InputLabel>
              <Select
                label="Departemen"
                name="id_department"
                value={employee.id_department}
                onChange={handleDepartmentChange}
              >
                {departments.map((dept) => (
                  <MenuItem key={dept.id} value={dept.id}>
                    {dept.department_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Jabatan</InputLabel>
              <Select
                label="Jabatan"
                name="id_position"
                value={employee.id_position}
                onChange={handleChange}
              >
                {positions.map((position) => (
                  <MenuItem key={position.id} value={position.id}>
                    {position.position_name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="address"
              label="Alamat"
              value={employee.address}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={4} display={"flex"} gap={2}>
            <Button type="submit" variant="contained" color="primary" fullWidth>
              Submit
            </Button>
            <Button
              onClick={() => navigate("/employee")}
              variant="contained"
              color="inherit"
              fullWidth
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default EmployeeForm;
