import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { deleteDepartment, getDepartments } from "../../api/departmentService";
import DataTable from "../DataTable";

const DepartmentList = () => {
  const navigate = useNavigate();
  const [departments, setDepartments] = useState([]);

  const fetchDepartments = async () => {
    try {
      const response = await getDepartments();
      setDepartments(response.data);
    } catch (error) {
      console.error("Error fetching departments:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/department/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteDepartment(id);
      fetchDepartments();
    } catch (error) {
      console.error("Error deleting department:", error);
    }
  };

  useEffect(() => {
    fetchDepartments();
  }, []);

  const columns = [{ field: "department_name", headerName: "Nama Department" }];

  return (
    <Box pl={4} pt={4}>
      <Typography variant="h4" fontWeight="bold">
        Data Department
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} mt={2} width="50%">
        <Button
          component={Link}
          to="/department/add"
          variant="contained"
          sx={{
            width: "170px",
            textTransform: "none",
            color: "white",
            bgcolor: "#3789e6",
          }}
        >
          Tambah Department
        </Button>
        <DataTable
          data={departments}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default DepartmentList;
