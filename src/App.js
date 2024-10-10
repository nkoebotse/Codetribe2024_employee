import React, { useState } from "react";
import Layout from "./Components/Layout";

function App() {
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

  const handleFileChange = (e) => {
    setInput({ ...input, image: e.target.files[0] });
  };

  const addOrUpdateTodo = () => {
    if (isEditing) {
      const updatedList = list.map(todo =>
        todo.id === isEditing ? { ...todo, ...input } : todo
      );
      setList(updatedList);
      setIsEditing(null);
    } else {
      const newTodo = {
        id: Math.random(),
        ...input,
      };
      setList([...list, newTodo]);
    }
    setInput({ ID: '', name: '', surname: '', phone: '', position: '', image: null });
  };

  const deleteTodo = (id) => {
    const newList = list.filter((todo) => todo.id !== id);
    setList(newList);
  };

  const editTodo = (todo) => {
    setInput(todo);
    setIsEditing(todo.id);
  };

  // Inline style for background
  const backgroundStyle = {
    backgroundImage: 'url("/assets/salt-harvesting-3060093_1280.jpg")', // Ensure the correct path to the image
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh', // Full height of the viewport
    padding: '20px',
  };

  return (
    <div style={backgroundStyle}> {/* Apply background style here */}
      <Layout />
      <div className="employee-position" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', padding: '20px', borderRadius: '10px' }}>
        <h1>Employee</h1>

        <input
          type="text"
          value={input.ID}
          placeholder="ID"
          onChange={(e) => setInput({ ...input, ID: e.target.value })}
        />
        <input
          type="text"
          value={input.name}
          placeholder="Name and Surname"
          onChange={(e) => setInput({ ...input, name: e.target.value })}
        />
        <input
          type="text"
          value={input.surname}
          placeholder="Email address"
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
          placeholder="Employee position"
          onChange={(e) => setInput({ ...input, position: e.target.value })}
        />
        
        <input
          type="file"
          accept="image/*" // Accept image files only
          onChange={handleFileChange}
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
            {list.map((todo) => (
              <tr key={todo.id}>
                <td>{todo.ID}</td>
                <td>{todo.name}</td>
                <td>{todo.surname}</td>
                <td>{todo.phone}</td>
                <td>{todo.position}</td>
                <td>
                  {todo.image && (
                    <img 
                      src={URL.createObjectURL(todo.image)} 
                      alt="Employee" 
                      style={{ width: '50px', height: '50px' }} 
                    />
                  )}
                </td>
                <td>
                  <button onClick={() => editTodo(todo)}>Edit</button>
                  <button onClick={() => deleteTodo(todo.id)}>&times; Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
