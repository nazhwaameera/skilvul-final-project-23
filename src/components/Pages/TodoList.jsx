import React, { useState, useEffect } from "react";

import Paper from "../Todo/paper/Paper";
import Header from "../Todo/header/Header";
import TodoForm from "../Todo/todoform/TodoForm";
import Todos from "../Todo/todos/Todos";

import Container from "../Layout/Container";

const TodoList = () => {
  // const [todos, setTodos] = useState([]);
  const [todos, setTodos] = useState(JSON.parse(localStorage.getItem("todos")) || []);
  const [showAdd, setShowAdd] = useState(false);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (value) => {
    if (todos.length > 9) {
      alert("Maksimal 10 anjing");
      return;
    }

    const addedTodo = [...todos, { text: value, isCompleted: false }];

    setTodos(addedTodo);
  };

  const clearTodos = () => {
    if (showAdd) {
      alert("Finish add todo before clear");
      return;
    }
    setTodos([]);
  };

  const completeTodo = (index) => {
    const addedTodo = [...todos];
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  };

  const showAddToggle = () => setShowAdd(!showAdd);

  return (
    <Paper>
      <Container flexDirection="column" justifyContent="space-between">
        <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos} />
        <TodoForm addTodo={addTodo} showAdd={showAdd} />
        <Todos todos={todos} completeTodo={completeTodo} />
      </Container>
    </Paper>
  );
};

export default TodoList;
