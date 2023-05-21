import React from "react";
import "../MyComponents/MyStyle.css";

const TodoItems = ({ todo, onDelete }) => {
  return (
    <>
      <div>
          <h4 className="todo-box">{todo.title}</h4>
          <p className="todo-box">{todo.desc}</p>
        <button
          className="btn  btn-sm btn-danger dlt-btn"
          onClick={() => {
            onDelete(todo);
          }}
        >
          Delete
        </button>
      </div>
      <hr />
    </>
  );
};

export default TodoItems;
