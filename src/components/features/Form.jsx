import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !description) return alert("Preencha todos os campos");
    addTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <div className="AddTask">
      <form onSubmit={handleSubmit}>
        <div className="input">
          <input
            type="text"
            placeholder="Titulo..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Descrição..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button className="normal" id="add" title="Adicionar" type="submit">
          +
        </button>
      </form>
    </div>
  );
};

export default AddTask;
