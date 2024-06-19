import React from "react";
import Sidebar from "../components/Sidebar";
import { Box } from "@mui/material";

const MainLayout = ({ children }) => {
  return (
    <Box display="flex" height="100vh">
      <Sidebar />
      <Box component="main" width="100%" bgcolor="whitesmoke">
        {children}
      </Box>
    </Box>
  );
};

export default MainLayout;
