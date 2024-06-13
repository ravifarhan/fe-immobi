import React, { useState, useEffect } from 'react';
import { getDepartments, deleteDepartment } from '../api/departmentService';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const DepartmentList = () => {
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

  const handleDelete = async (id) => {
    try {
      await deleteDepartment(id);
      fetchDepartments();
    } catch (error) {
      console.error('Error deleting department:', error);
    }
  };

  return (
    <div>
      <h2>Department List</h2>
      <List>
        {departments.map((department) => (
          <ListItem key={department.id} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(department.id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={department.department_name} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default DepartmentList;
