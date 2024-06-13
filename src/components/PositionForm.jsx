import React, { useState, useEffect } from 'react';
import { createPosition } from '../api/positionService';
import { getDepartments } from '../api/departmentService';
import { TextField, Select, MenuItem, Button, InputLabel, FormControl } from '@mui/material';

const PositionForm = ({ fetchPositions }) => {
  const [position_name, setPositionName] = useState('');
  const [id_department, setIdDepartment] = useState('');
  const [departments, setDepartments] = useState([]);

  useEffect(() => {
    fetchDepartments();
  }, []);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error('Error fetching departments:', error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPosition({ position_name, id_department });
      fetchPositions();
      setPositionName('');
      setIdDepartment('');
    } catch (error) {
      console.error('Error creating position:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Position Name"
        value={position_name}
        onChange={(e) => setPositionName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel id="department-label">Department</InputLabel>
        <Select
          labelId="department-label"
          value={id_department}
          onChange={(e) => setIdDepartment(e.target.value)}
        >
          <MenuItem value=""><em>Select Department</em></MenuItem>
          {departments.map((department) => (
            <MenuItem key={department.id} value={department.id}>
              {department.department_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary">
        Add Position
      </Button>
    </form>
  );
};

export default PositionForm;
