import React, { useState } from 'react';

const EmployeeForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || {});


  const handleChange = e => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    if (name === 'post' && value === 'Executive Director') {
      newFormData.salary = '₹450000';
    }
    if (name === 'post' && value === 'GM') {
      newFormData.salary = '₹300000';
    }
    if (name === 'post' && value === 'DGM') {
      newFormData.salary = '₹260000';
    }
    if (name === 'post' && value === 'CDBA') {
      newFormData.salary = '₹260000';
    }
    if (name === 'post' && value === 'DBA') {
      newFormData.salary = '₹180000';
    }
    if (name === 'post' && value === 'ITM') {
      newFormData.salary = '₹150000';
    }
    if (name === 'post' && value === 'SO') {
      newFormData.salary = '₹100000';
    }
    if (name === 'post' && value === 'AITM') {
      newFormData.salary = '₹100000';
    }
    if (name === 'post' && value === 'LS') {
      newFormData.salary = '₹80000';
    }
    if (name === 'post' && value === 'Asst./HC/Asst. St. K.') {
      newFormData.salary = '₹60000';
    }
    if (name === 'post' && value === 'CC/ St. Asst.') {
      newFormData.salary = '₹40000';
    }
    setFormData(newFormData);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...formData, id: initialData ? initialData.id : null });
    setFormData(initialData || {});
  };
  
  const fetchEmployeeById = async id => {
    // Implement your API call to fetch employee data by ID
    // This is a placeholder function, replace it with your actual API call
    const response = await fetch(`https://your-api-url/employees/${id}`);
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      throw new Error('Failed to fetch employee data.');
    }
  };
  
  return (
    <div>
       {/* <input
          type="text"
          placeholder="Search by Employee ID"
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
        />
      <button onClick={handleSearch} style={{ width: "100%" }}>Search</button> */}
      <form onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          placeholder="Enter name"
          required
          style={{textTransform: "capitalize"}}
        />

        <input
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          placeholder="Enter Email"
          required
        />
         <input
          type="tel" pattern="[0-9]{10}"
          name="Phone"
          value={formData.Phone || ''}
          onChange={handleChange}
          placeholder="Enter phone number"
          required
        />
        <select
          name="post"
          value={formData.post || ''}
          onChange={handleChange}
          required
          style={{cursor: "pointer"}}
        >
          <option value="">Select Designation</option>
          <option value="Executive Director">Executive Director (HR & Adm.)</option>
          <option value="GM">General Manager (HR & Adm.)</option>
          <option value="DGM">Deputy General Manager (HR & Adm.)/P</option>
          <option value="CDBA">Common Data Bus Architecture</option>
          <option value="DBA">Database Administrator</option>
          <option value="ITM">ITM</option>
          <option value="SO">Specialist Officer</option>
          <option value="AITM">AITM</option>
          <option value="LS">LS</option>
          <option value="Asst./HC/Asst. St. K.">Asst./HC/Asst. St. K.</option>
          <option value="CC/ St. Asst.">CC/ St. Asst.</option>
          {/* Add more options as needed */}
        </select>
        <select
          name="department"
          value={formData.department || ''}
          onChange={handleChange}
          required
          style={{cursor: "pointer"}}
        >
          <option value="">Select Department</option>
          <option value="Civil-Engg">Civil-Engg</option>
          <option value="Comm. Revenue Accounting and Energy Accounting">Comm. Revenue Accounting and Energy Accounting</option>
          <option value="CRITL">CRITL</option>
          <option value="Finance and Accounts">Finance and Accounts</option>
          <option value="Human Resource and Administration">Human Resource and Administration</option>
          <option value="I. T.">I. T.</option>
          <option value="Inter State">Inter State</option>
          <option value="Power Management Cell">Power Management Cell</option>
          <option value="Project and Planning">Project and Planning</option>
          <option value="SLDC">SLDC</option>
          <option value="Store and Material">Store and Material</option>
          <option value="STU">STU</option>
          <option value="Telecom">Telecom</option>
          <option value="Training">Training</option>
          <option value="Transmission(O and M)">Transmission(O and M)</option>
          <option value="ULDC">ULDC</option>

          {/* Add more options as needed */}
      
        </select>
        
        <input
          type="text"
          name="salary"
          value={formData.salary || ''}
          onChange={handleChange}
          placeholder="Salary"
          style={{ width: '100%', marginBottom: '10px' }}
        />
        <input
          type="text"
          name="nationality"
          value={formData.nationality || ''}
          onChange={handleChange}
          placeholder="Nationality"
          required
          style={{ width: '100%', marginBottom: '10px',textTransform: "capitalize"}}
        />
        <input
          type="date"
          name="dateOfBirth"
          value={formData.dateOfBirth || ''}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
          max="2006-01-01"
          style={{cursor: "pointer"}}
        />
        
       <button type="submit" style={{ width:"100%" }}>{initialData ? 'Update' : 'Add'}</button>

      </form>
    </div>
  );
};

export default EmployeeForm;
