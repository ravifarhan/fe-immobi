import React, { useState } from 'react';
import { createDepartment } from '../api/departmentService';
import { TextField, Button } from '@mui/material';

const DepartmentForm = ({ fetchDepartments }) => {
  const [nama_department, setNamaDepartment] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createDepartment({ nama_department });
      fetchDepartments();
      setNamaDepartment('');
    } catch (error) {
      console.error('Error creating department:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Department Name"
        value={nama_department}
        onChange={(e) => setNamaDepartment(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Department
      </Button>
    </form>
  );
};

export default DepartmentForm;
