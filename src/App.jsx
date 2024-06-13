import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import DepartmentList from "./components/DepartmentList";
import EmployeeList from "./components/EmployeeList";
import PositionList from "./components/PositionList";
import DepartmentForm from "./components/DepartmentForm";
import EmployeeForm from "./components/EmployeeForm";
import PositionForm from "./components/PositionForm";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/department"
            element={
              <>
                <DepartmentForm />
                <DepartmentList />
              </>
            }
          />
          <Route
            path="/employee"
            element={
              <>
                <EmployeeForm />
                <EmployeeList />
              </>
            }
          />
          <Route
            path="/position"
            element={
              <>
                <PositionForm />
                <PositionList />
              </>
            }
          />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
