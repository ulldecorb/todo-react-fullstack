import React, { useState, useRef } from 'react';
import { TodoList } from './components/TodoList';
import List from './constants/List';

export const App = function App() {
  const [todos, setTodos] = useState([...List]);
  // const [newTask, setNewTask] = useState('');

  const newTaskRef = useRef();

  const toggleTodoCheck = (id) => {
    const newTodos = [...todos];
    const todo = newTodos.find((task) => task.id === id);
    todo.completed = !todo.completed;
    setTodos(newTodos);
  };

  // const handleInput = (event) => {
  //   setNewTask(event.target.value);
  // };
  // onChange={handleInput}

  const handleDeleteTask = (event, id) => {
    event.preventDefault();
    const newTodos = todos.filter((task) => task.id !== id);
    setTodos(newTodos);
  };

  const handleCreateNewTask = () => {
    const newId = todos.length !== 0 ? todos[todos.length - 1].id + 1 : 0;
    const newTask = newTaskRef.current.value;
    const newTodo = { id: newId, task: newTask, complete: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    newTaskRef.current.value = null;
  };

  const handleResetList = () => {
    const newTodos = [...todos].filter((todo) => todo.completed === false);
    setTodos(newTodos);
  };

  return (
    <section>
      <TodoList
        todos={todos}
        handleDeleteTask={handleDeleteTask}
        toggleTodoCheck={toggleTodoCheck}
      />
      <input
        type="text"
        placeholder="Write new task"
        name="addtask"
        id="addtask"
        ref={newTaskRef}
      />
      <button type="button" onClick={() => handleCreateNewTask()}>ADD TASK</button>
      <button type="button" onClick={() => handleResetList()}>RESET</button>
    </section>
  );
};

export default App;
