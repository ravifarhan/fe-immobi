// import React, { useState } from 'react';
// import { createEmployee } from '../../api/employeeService';
// import { TextField, Button } from '@mui/material';

// const EmployeeEditForm = ({ fetchEmployees }) => {
//   const [name, setName] = useState('');
//   const [id_position, setIdPosition] = useState('');
//   const [age, setAge] = useState('');
//   const [gender, setGender] = useState('');
//   const [birth_date, setBirthDate] = useState('');
//   const [address, setAddress] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await createEmployee({ name, id_position, age, gender, birth_date, address });
//       fetchEmployees();
//       setName('');
//       setIdPosition('');
//       setAge('');
//       setGender('');
//       setBirthDate('');
//       setAddress('');
//     } catch (error) {
//       console.error('Error creating employee:', error);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <TextField
//         label="Name"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Position ID"
//         value={id_position}
//         onChange={(e) => setIdPosition(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Age"
//         value={age}
//         onChange={(e) => setAge(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Gender"
//         value={gender}
//         onChange={(e) => setGender(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <TextField
//         label="Birth Date"
//         type="date"
//         value={birth_date}
//         onChange={(e) => setBirthDate(e.target.value)}
//         fullWidth
//         margin="normal"
//         InputLabelProps={{
//           shrink: true,
//         }}
//       />
//       <TextField
//         label="Address"
//         value={address}
//         onChange={(e) => setAddress(e.target.value)}
//         fullWidth
//         margin="normal"
//       />
//       <Button type="submit" variant="contained" color="primary">
//         Add Employee
//       </Button>
//     </form>
//   );
// };

// export default EmployeeEditForm;


import React, { useState, useEffect } from 'react';
import { TextField, Button, FormControl, FormControlLabel, Radio, RadioGroup, Select, MenuItem, InputLabel, Box } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { getEmployeeById, updateEmployee } from '../../api/employeeService';
import { getDepartments } from '../../api/departmentService';
import { getPositions } from '../../api/positionService';

const EmployeeEditForm = ({ fetchEmployees }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: '',
    age: '',
    gender: '',
    birth_date: '',
    address: '',
    id_department: '',
    id_position: '',
  });
  const [departments, setDepartments] = useState([]);
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const employeeResponse = await getEmployeeById(id);
        setEmployee(employeeResponse.data);

        const departmentsResponse = await getDepartments();
        setDepartments(departmentsResponse.data);

        const positionsResponse = await getPositions();
        setPositions(positionsResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateEmployee(id, employee);
      fetchEmployees();
      navigate('/employees');
    } catch (error) {
      console.error('Error updating employee:', error);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 600, mx: 'auto', mt: 4 }}>
      <TextField
        label="Nama"
        name="name"
        value={employee.name}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Usia"
        name="age"
        type="number"
        value={employee.age}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl component="fieldset" margin="normal">
        <RadioGroup row name="gender" value={employee.gender} onChange={handleChange}>
          <FormControlLabel value="male" control={<Radio />} label="Laki-laki" />
          <FormControlLabel value="female" control={<Radio />} label="Perempuan" />
        </RadioGroup>
      </FormControl>
      <TextField
        label="Tanggal Lahir"
        name="birth_date"
        type="date"
        value={employee.birth_date}
        onChange={handleChange}
        fullWidth
        margin="normal"
        InputLabelProps={{
          shrink: true,
        }}
      />
      <TextField
        label="Alamat"
        name="address"
        value={employee.address}
        onChange={handleChange}
        fullWidth
        margin="normal"
      />
      <FormControl fullWidth margin="normal">
        <InputLabel>Department</InputLabel>
        <Select
          name="id_department"
          value={employee.id_department}
          onChange={handleChange}
        >
          {departments.map((dept) => (
            <MenuItem key={dept.id} value={dept.id}>
              {dept.department_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth margin="normal">
        <InputLabel>Jabatan</InputLabel>
        <Select
          name="id_position"
          value={employee.id_position}
          onChange={handleChange}
        >
          {positions.map((position) => (
            <MenuItem key={position.id} value={position.id}>
              {position.position_name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Save Changes
      </Button>
    </Box>
  );
};

export default EmployeeEditForm;
