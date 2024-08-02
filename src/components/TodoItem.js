// src/components/TodoItem.js
import React from 'react';
import './TodoItem.css'; // Ensure you have corresponding styles

const TodoItem = ({ todo, onDelete }) => {
  return (
    <li className="todo-item">
      {todo.text}
      <button className="delete-btn" onClick={onDelete}>Delete</button>
    </li>
  );
};

export default TodoItem;
