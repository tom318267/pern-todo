import React, { useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const res = await fetch("http://localhost:5000/todos", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      setDescription("");
      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <h1 className="text-center mt-5">Pern Todo List</h1>
      <form onSubmit={onSubmitForm} className="d-flex mt-5">
        <input
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          className="form-control"
          value={description}
        />
        <button className="btn btn-success">Add</button>
      </form>
    </div>
  );
};

export default InputTodo;
