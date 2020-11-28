import React from "react";
import InputTodo from "./components/InputTodo";
import ListTodos from "./components/ListTodos";
import "./App.css";

const App = () => {
  return (
    <div>
      <div className="container">
        <InputTodo />
        <ListTodos />
      </div>
    </div>
  );
};

export default App;
