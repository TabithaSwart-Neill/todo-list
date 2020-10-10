import React from 'react';
// import React, { usestate } from 'react';
import './App.css';
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import "./App.css";

function App() {
  const [todos, setTodos] = React.useState([
    {
      text: "learn about react",
      isCompleted: false,
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false,
    },
    {
      text: "Build really cool todo app",
      isCompleted: false,
    },
  ]);

  const addTodo = (text) => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return(
    <div className="app">
    <div className="todo-list">
    <h1> My todo list</h1>
    {todos.map((todo, index) => (
      <TodoItem 
      todo={todo} 
      key={index} 
      index={index} 
      completeTodo={completeTodo}
      removeTodo={removeTodo}/>
    ))}
    <TodoForm addTodo={addTodo}/>
    </div>
    </div>
  );
}

export default App;
