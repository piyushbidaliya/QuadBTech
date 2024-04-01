// src/TodoApp.js

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask } from './action';
import './todo.css'

export function Todo() {
  const tasks = useSelector(state => state.tasks);
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddTask = () => {
    if (inputValue.trim() !== '') {
      dispatch(addTask(inputValue));
      setInputValue('');
    }
  };

  const handleDeleteTask = (index) => {
    dispatch(deleteTask(index));
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="TodoApp">
      <h1>Todo App</h1>
      <div className='todoinput'>
        <input
          type="text"
          placeholder="Enter task"
          value={inputValue}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className='todolist'>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <span>{task}</span>
            <button onClick={() => handleDeleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}

export default Todo;
