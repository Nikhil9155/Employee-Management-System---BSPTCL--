import React from 'react';
import * as XLSX from 'xlsx';
import Header from '../../components/Header';

const EmployeeList = ({ employees, onEdit, onDelete }) => {
  const exportToExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(employees);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Employees');
    XLSX.writeFile(workbook, 'employees.xlsx');
  };

  return (
    <div>
      <Header />
      <h2 style={{marginTop:'20px'}}>Employee List</h2>
      <button  style={{marginTop:'20px'}} onClick={exportToExcel}>Export to Excel</button>
      <table style={{marginTop:'20px'}}>
        <thead>
          <tr>
            <th>Serial No.</th>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>DOB</th>
            <th>Post</th>
            <th>Nationality</th>
            <th>Department</th>
            <th>Salary(Per Month)</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={employee.id}>
              <td>{index + 1}</td>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
              <td>{employee.Phone}</td>
              <td>{employee.dateOfBirth}</td>
              <td>{employee.post}</td>
              <td>{employee.nationality}</td>
              <td>{employee.department}</td>
              <td>{employee.salary}</td>
              
              <td>
                <button onClick={() => onEdit(employee)}>Edit</button>
                <button onClick={() => onDelete(employee.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
