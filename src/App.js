import React from 'react';
// import React, { usestate } from 'react';
import TodoItem from "./components/TodoItem/TodoItem";
import TodoForm from "./components/TodoForm/TodoForm";
import NButtons from "./components/NumberButtons/NButtons";
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
    {
      text: "Task 4",
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
// Number Buttons
  const [value, setValue] = React.useState(0);
    const incrementValue = () => {
      setValue(value + 1)
    }
    const decrementValue = () => {
      setValue(value - 1)
  }

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

    <h2> Number Buttons </h2>
    <div className="nbuttons">
      <h2>Numbers</h2>
      <p>Increase or Decrease a number</p>
      <button onClick={() => decrementValue()}> -   </button>
      {   value   }
      <button onClick={() => incrementValue()}> + </button>
    </div>
    </div>
  );
}

export default App;