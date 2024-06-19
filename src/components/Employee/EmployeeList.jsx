import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../DataTable";
import { getEmployees, deleteEmployee } from "../../api/employeeService";

const EmployeeList = () => {
  const navigate = useNavigate();
  const [employees, setEmployees] = useState([]);

  const fetchEmployees = async () => {
    try {
      const response = await getEmployees();
      setEmployees(response.data);
    } catch (error) {
      console.error("Error fetching employee:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/employee/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteEmployee(id);
      fetchEmployees();
    } catch (error) {
      console.error("Error deleting position:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const columns = [
    { field: "name", headerName: "Nama" },
    { field: "position_name", headerName: "Jabatan" },
    { field: "age", headerName: "Usia" },
    { field: "gender", headerName: "Jenis Kelamin" },
    { field: "birth_date", headerName: "Tanggal Lahir" },
    { field: "address", headerName: "Alamat" },
  ];

  return (
    <Box px={4} pt={4}>
      <Typography variant="h4" fontWeight="bold">
        Data Karyawan
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} mt={2} >
        <Button
          component={Link}
          to="/employee/add"
          variant="contained"
          sx={{
            width: "160px",
            textTransform: "none",
            color: "white",
            bgcolor: "#3789e6",
          }}
        >
          Tambah Karyawan
        </Button>
        <DataTable
          data={employees}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default EmployeeList;
