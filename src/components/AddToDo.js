// src/components/AddToDo.js
import React, { useState } from 'react';
import axios from 'axios';

const AddToDo = ({ fetchTodos }) => {
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');

  const handleAddToDo = async (e) => {
    e.preventDefault();
    if (!description) {
      setError('Please enter a description');
      return;
    }

    try {
      await axios.post('/todos', { description });
      setDescription('');
      setError('');
      fetchTodos(); // Refresh the list of todos
    } catch (err) {
      setError('Failed to add to-do');
    }
  };

  return (
    <div className="add-todo-container">
      <h2>Add New To-Do</h2>
      <form onSubmit={handleAddToDo}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Enter to-do description"
        />
        <button type="submit">Add To-Do</button>
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
};

export default AddToDo;
