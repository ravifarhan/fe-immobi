import React, { useState, useEffect } from 'react';
import { getPositions, deletePosition } from '../api/positionService';
import { List, ListItem, ListItemText, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const PositionList = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    fetchPositions();
  }, []);

  const fetchPositions = async () => {
    try {
      const response = await getPositions();
      setPositions(response.data);
    } catch (error) {
      console.error('Error fetching positions:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deletePosition(id);
      fetchPositions();
    } catch (error) {
      console.error('Error deleting position:', error);
    }
  };

  return (
    <div>
      <h2>Position List</h2>
      <List>
        {positions.map((position) => (
          <ListItem key={position.id} secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(position.id)}>
              <DeleteIcon />
            </IconButton>
          }>
            <ListItemText primary={`${position.position_name} - ${position.Department?.department_name}`} />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PositionList;
