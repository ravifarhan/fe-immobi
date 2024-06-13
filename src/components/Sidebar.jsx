import React from 'react';
import { Link } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@mui/material';

const Sidebar = () => {
  return (
    <div style={{ width: '200px', background: 'black', height: '100vh', padding: '20px' }}>
      <h2>Dashboard</h2>
      <List>
        <ListItem button component={Link} to="/department">
          <ListItemText primary="Department" />
        </ListItem>
        <ListItem button component={Link} to="/position">
          <ListItemText primary="Positions" />
        </ListItem>
        <ListItem button component={Link} to="/employee">
          <ListItemText primary="Employees" />
        </ListItem>
      </List>
    </div>
  );
};

export default Sidebar;
