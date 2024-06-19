import React from "react";
import { Link } from "react-router-dom";
import { Box, List, ListItem, ListItemText, Typography } from "@mui/material";

const MENU = [
  {
    title: "Dashboard",
    link: "/",
  },
  {
    title: "Department",
    link: "/department",
  },
  {
    title: "Jabatan",
    link: "/position",
  },
  {
    title: "Karyawan",
    link: "/employee",
  },
];

const Sidebar = () => {
  return (
    <Box
      style={{
        display: "flex",
        flexDirection: "column",
        width: "300px",
        height: "100vh",
        borderRight: "1px solid black",
        color: "white",
      }}
    >
      <Box component={Link} to="/" display="flex" justifyContent="center" my={4}>
        <img src="../src/assets/immobi.png" alt="logo" width={200} />
      </Box>
      <Box px={4}>
        <List>
          {MENU.map((menu) => (
            <ListItem
              key={menu.title}
              component={Link}
              to={menu.link}
              sx={{ color: "white", ":hover": { color: "#3789e6" } }}
            >
              <ListItemText primary={menu.title} sx={{ fontWeight: "bold" }} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};

export default Sidebar;
