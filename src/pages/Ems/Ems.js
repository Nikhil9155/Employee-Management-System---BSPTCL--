import React, { useState } from 'react';
import EmployeeList from './EmployeeList';
import EmployeeForm from './EmployeeForm';
import "./Ems.css"

const Ems = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);

  const generateId = () => {
    return Math.floor(Math.random() * 1000); // Generate a random ID
  };

  const handleAddEmployee = employee => {
    const newEmployee = { ...employee, id: generateId() };
    setEmployees(prevEmployees => [...prevEmployees, newEmployee]);
  };

  const handleEditEmployee = employee => {
    setSelectedEmployee(employee);
  };

  const handleUpdateEmployee = updatedEmployee => {
    setEmployees(prevEmployees =>
      prevEmployees.map(emp =>
        emp.id === updatedEmployee.id ? updatedEmployee : emp
      )
    );
    setSelectedEmployee(null);
  };

  const handleDeleteEmployee = id => {
    setEmployees(prevEmployees =>
      prevEmployees.filter(emp => emp.id !== id)
    );
  };

  return (
    <div>
      <EmployeeList
        employees={employees}
        onEdit={handleEditEmployee}
        onDelete={handleDeleteEmployee}
      />
      <EmployeeForm
        onSubmit={selectedEmployee ? handleUpdateEmployee : handleAddEmployee}
        initialData={selectedEmployee}
      />
    </div>
  );
};

export default Ems;
