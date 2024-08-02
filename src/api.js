import axios from 'axios';

const api = axios.create({
  baseURL: 'https://todo-backend-4vff.onrender.com', // Your backend URL
});

export const register = (data) => api.post('/auth/register', data);
export const login = (data) => api.post('/auth/login', data);
export const getTodos = () => api.get('/todos');
export const createTodo = (data) => api.post('/todos', data);
export const updateTodo = (id, data) => api.put(`/todos/${id}`, data);
export const deleteTodo = (id) => api.delete(`/todos/${id}`);
