import React from "react";
import "../MyComponents/MyStyle.css";
import { useState } from "react";

const AddTask = ({ addTodo }) => {
  const [title, settitle] = useState("");
  const [desc, setdesc] = useState("");

  const Submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be blank");
    } else {
      addTodo(title, desc);
      settitle("");
      setdesc("");
    }
  };
  return (
    <div className="container my-3" id="AddTodoForm">
      <h3 className="text-center addtxt">Add a Todo</h3>
      <form onSubmit={Submit}>
        <div className="mb-3">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="form-control"
            id="title"
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            placeholder="Decription"
            value={desc}
            onChange={(e) => {
              setdesc(e.target.value);
            }}
            className="form-control"
            id="desc"
          />
        </div>
        <button type="submit" className="btn btn-sm btn-success">
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default AddTask;
