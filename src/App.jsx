import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./components/Dashboard";
import DepartmentList from "./components/Department/DepartmentList";
import DepartmentForm from "./components/Department/DepartmentForm";
import DepartmentEditForm from "./components/Department/DepartmentEditForm";
import PositionList from "./components/Position/PositionList";
import PositionForm from "./components/Position/PositionForm";
import PositionEditForm from "./components/Position/PositionEditForm";
import EmployeeList from "./components/Employee/EmployeeList";
import EmployeeForm from "./components/Employee/EmployeeForm";

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* Department Routes */}
          <Route path="/department" element={<DepartmentList />} />
          <Route path="/department/add" element={<DepartmentForm />} />
          <Route path="/department/edit/:id" element={<DepartmentEditForm />} />
          {/* Position Routes */}
          <Route path="/position" element={<PositionList />} />
          <Route path="/position/add" element={<PositionForm />} />
          <Route path="/position/edit/:id" element={<PositionEditForm />} />
          {/* Employee Routes */}
          <Route path="/employee" element={<EmployeeList />} />
          <Route path="/employee/add" element={<EmployeeForm />} />
        </Routes>
      </MainLayout>
    </Router>
  );
};

export default App;
