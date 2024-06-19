import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Button,
} from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";

const DataTable = ({ data, columns, onEdit, onDelete }) => {
  return (
    <TableContainer component={Paper}>
      <Table size="small" aria-label="simple table">
        <TableHead>
          <TableRow sx={{ backgroundColor: "lightgray" }}>
            <TableCell sx={{ fontWeight: "bold" }} size="medium">
              No
            </TableCell>
            {columns.map((column) => (
              <TableCell
                key={column.field}
                sx={{ fontWeight: "bold" }}
                size="medium"
              >
                {column.headerName}
              </TableCell>
            ))}
            <TableCell sx={{ fontWeight: "bold" }} size="medium" align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.sort().map((row, index) => (
            <TableRow key={row.id}>
              <TableCell>{index + 1}</TableCell>
              {columns.map((column) => (
                <TableCell key={column.field}>{row[column.field]}</TableCell>
              ))}
              <TableCell align="center">
                <Button
                  size="small"
                  variant="contained"
                  color="success"
                  sx={{
                    borderRadius: "30px",
                    textTransform: "none",
                    mr: 1,
                    padding: "4px",
                    minWidth: "unset",
                  }}
                  onClick={() => onEdit(row.id)}
                >
                  <Edit />
                </Button>
                <Button
                  size="small"
                  variant="contained"
                  color="error"
                  sx={{
                    borderRadius: "30px",
                    textTransform: "none",
                    padding: "4px",
                    minWidth: "unset",
                  }}
                  onClick={() => onDelete(row.id)}
                >
                  <Delete />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
