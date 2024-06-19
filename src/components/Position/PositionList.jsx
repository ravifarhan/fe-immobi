import React, { useState, useEffect } from "react";
import { Button, Typography, Box } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import DataTable from "../DataTable";
import { deletePosition, getPositions } from "../../api/positionService";

const PositionList = () => {
  const navigate = useNavigate();
  const [positions, setPositions] = useState([]);

  const fetchPositions = async () => {
    try {
      const response = await getPositions();
      setPositions(response.data);
    } catch (error) {
      console.error("Error fetching positions:", error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/position/edit/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await deletePosition(id);
      fetchPositions();
    } catch (error) {
      console.error("Error deleting position:", error);
    }
  };

  useEffect(() => {
    fetchPositions();
  }, []);

  const columns = [
    { field: "department_name", headerName: "Nama Department" },
    { field: "position_name", headerName: "Nama Jabatan" },
  ];

  return (
    <Box pl={4} pt={4}>
      <Typography variant="h4" fontWeight="bold">
        Data Jabatan
      </Typography>
      <Box display="flex" flexDirection="column" gap={2} mt={2} width="80%">
        <Button
          component={Link}
          to="/position/add"
          variant="contained"
          sx={{
            width: "150px",
            textTransform: "none",
            color: "white",
            bgcolor: "#3789e6",
          }}
        >
          Tambah Jabatan
        </Button>
        <DataTable
          data={positions}
          columns={columns}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />
      </Box>
    </Box>
  );
};

export default PositionList;
