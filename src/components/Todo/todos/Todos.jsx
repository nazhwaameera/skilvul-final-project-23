/** @jsxRuntime classic */
/** @jsx jsx */
// import React from "react";
import { jsx } from "@emotion/react";
import React from "react";
import PropTypes from "prop-types";
import * as styles from "./todos.styles";

import Todo from "../todo/Todo";
import Container from "../../Layout/Container";

const Todos = ({ todos, completeTodo }) => {
  return (
    <section className="todos-component">
      <Container flexDirection="column" minHeight="500px">
        {todos.length > 0 &&
          todos.map((todo, index) => {
            return <Todo key={todo.index} text={todo.text} isCompleted={todo.isCompleted} completeTodo={completeTodo} index={index} />;
          })}
        {todos.length === 0 && (
          <React.Fragment>
            <div css={styles.todoPlaceholderText}>
              Add todo by clicking <span css={styles.addButtonPlaceholderText}>Add</span> button on the top left corner
            </div>
          </React.Fragment>
        )}
      </Container>
    </section>
  );
};

Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  completeTodo: PropTypes.func.isRequired,
};

export default Todos;
