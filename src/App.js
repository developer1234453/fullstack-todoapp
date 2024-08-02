// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import TodoList from './components/TodoList';
import AddToDo from './components/AddToDo';
import Auth from './components/Auth';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <Routes>
          <Route path="/" element={<h1>Welcome to To-Do App</h1>} />
          <Route path="/todos" element={<TodoList />} />
          <Route path="/add-todo" element={<AddToDo />} />
          <Route path="/login" element={<Auth />} />
          <Route path="/register" element={<Auth />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
