import { useState } from 'react';
import Input from './Input';
import List from './List';
import { Container } from '@mantine/core';

function TaskApp(){

const [tasks, setTasks] = useState([]);

const addTask = (taskName) => {
  setTasks((prevTasks) => {
    const newTask = { id: prevTasks.length, name: taskName, completed: false };
    return [...prevTasks, newTask];
  });
};

const toggleTask = (id) => {
  setTasks((tasks) => tasks.map((task) => task.id === id ? { ...task, completed: !task.completed } : task));
};

const removeTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
};

return (<Container>
  <h1>To-do list</h1>
  <Input addTask={addTask} />
  <List tasks={tasks} toggleTask={toggleTask} removeTask={removeTask}/>
</Container>
);
};
export default TaskApp;