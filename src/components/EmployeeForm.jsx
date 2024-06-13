import React, { useState } from 'react';
import { createEmployee } from '../api/employeeService';
import { TextField, Button } from '@mui/material';

const EmployeeForm = ({ fetchEmployees }) => {
  const [name, setName] = useState('');
  const [id_position, setIdPosition] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [birth_date, setBirthDate] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createEmployee({ name, id_position, age, gender, birth_date, address });
      fetchEmployees();
      setName('');
      setIdPosition('');
      setAge('');
      setGender('');
      setBirthDate('');
      setAddress('');
    } catch (error) {
      console.error('Error creating employee:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Position ID"
        value={id_position}
        onChange={(e) => setIdPosition(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Birth Date"
        type="date"
        value={birth_date}
        onChange={(e) => setBirthDate(e.target.value)}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary">
        Add Employee
      </Button>
    </form>
  );
};

export default EmployeeForm;
