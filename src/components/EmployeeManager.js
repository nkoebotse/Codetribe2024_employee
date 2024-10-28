// EmployeeManager.js
import React, { useState, useEffect } from "react";

const EmployeeManager = () => {
  const [list, setList] = useState([]);
  const [input, setInput] = useState({
    ID: '',
    name: '',
    surname: '',
    phone: '',
    position: '',
    image: null 
  });
  const [isEditing, setIsEditing] = useState(null);
  const [searchQuery, setSearchQuery] = useState(""); // State for search query

  // Load employees from local storage on component mount
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setList(storedEmployees);
  }, []);

  // Save employees to local storage whenever the list changes
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(list));
  }, [list]);

  const addOrUpdateTodo = () => {
    if (isEditing) {
      const updatedList = list.map(employee =>
        employee.ID === isEditing ? { ...employee, ...input } : employee
      );
      setList(updatedList);
      setIsEditing(null);
    } else {
      const newEmployee = {
        id: Math.random(),
        ...input,
      };
      setList([...list, newEmployee]);
    }
    setInput({ ID: '', name: '', surname: '', phone: '', position: '', image: null });
  };

  const deleteTodo = (id) => {
    const newList = list.filter(employee => employee.id !== id);
    setList(newList);
  };

  const editTodo = (employee) => {
    setInput(employee);
    setIsEditing(employee.ID);
  };

  const filteredList = list.filter(employee => 
    employee.ID.includes(searchQuery)
  );

  return (
    <div className="employee-position">
      <h1>Employee Management</h1>

      {/* Search Input for ID */}
      <input
        type="text"
        placeholder="Search by ID"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {/* Form inputs for employee details */}
      <input
        type="text"
        value={input.ID}
        placeholder="ID"
        onChange={(e) => setInput({ ...input, ID: e.target.value })} 
      />
      <input
        type="text"
        value={input.name}
        placeholder="Name"
        onChange={(e) => setInput({ ...input, name: e.target.value })} 
      />
      <input
        type="text"
        value={input.surname}
        placeholder="Email Address"
        onChange={(e) => setInput({ ...input, surname: e.target.value })} 
      />
      <input
        type="text"
        value={input.phone}
        placeholder="Phone Number"
        onChange={(e) => setInput({ ...input, phone: e.target.value })} 
      />
      <input
        type="text"
        value={input.position}
        placeholder="Position"
        onChange={(e) => setInput({ ...input, position: e.target.value })} 
      />
      <input
        type="file"
        accept="image/*"
        onChange={(e) => setInput({ ...input, image: e.target.files[0] })} 
      />

      <button onClick={addOrUpdateTodo}>
        {isEditing ? 'Update Data' : 'Add Data'}
      </button>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Phone</th>
            <th>Position</th>
            <th>Image</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredList.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.ID}</td>
              <td>{employee.name}</td>
              <td>{employee.surname}</td>
              <td>{employee.phone}</td>
              <td>{employee.position}</td>
              <td>
                {employee.image && (
                  <img 
                    src={URL.createObjectURL(employee.image)} 
                    alt="Employee" 
                    style={{ width: '50px', height: '50px' }} 
                  />
                )}
              </td>
              <td>
                <button onClick={() => editTodo(employee)}>Edit</button>
                <button onClick={() => deleteTodo(employee.id)}>&times; Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeManager;
