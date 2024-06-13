import React from 'react';
import Sidebar from '../components/Sidebar';
import { Box } from '@mui/material';

const MainLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </div>
  );
};

export default MainLayout;
