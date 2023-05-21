import React from "react";
import "../MyComponents/MyStyle.css";
import TodoItems from "./TodoItems";

const Todos = (props) => {
  let MyStyle = {
    minHeight: "70vh",
    margin: "40px auto",
  };
  return (
    <div className="container todosBox" style={MyStyle}>
      <h3 className="my-5 addtxt text-center">Todos Lists</h3>
      {props.todos.length === 0
        ? "No Todos to display"
        : props.todos.map((todo) => {
            console.log(todo.sno);
            return (
              <TodoItems todo={todo} key={todo.sno} onDelete={props.onDelete} />
            );
          })}
    </div>
  );
};

export default Todos;
