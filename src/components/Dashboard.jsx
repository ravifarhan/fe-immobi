import { Box, Card, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Box
      display={"flex"}
      width={"100%"}
      height={"100vh"}
    >
      <Box flex pt={4} pl={4}>
        <Typography variant="h3">
          Dashboard
        </Typography>
        <Card sx={{ bgcolor: "#4c98f0", color: "white" }}>
          <Typography variant="h6">
            Employee
          </Typography>
        </Card>
      </Box>
    </Box>
  );
};

export default Dashboard;
