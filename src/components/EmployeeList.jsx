import React, { useState, useEffect } from 'react';
import { getEmployees, deleteEmployee } from '../api/employeeService';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error('Error fetching employees:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (error) {
      console.error('Error deleting employee:', error);
    }
  };

  return (
    <div>
      <h2>Employee List</h2>
      <List>
        {employees.map((employee) => (
          <ListItem key={employee.id} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(employee.id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={`${employee.name} - ${employee.id_position} - ${employee.age} - ${employee.gender} - ${employee.birth_date} - ${employee.address}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default EmployeeList;
