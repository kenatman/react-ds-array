import React, { useRef } from "react";

const EditForm = ({ card, onChange, onDelete }) => {
  const idRef = useRef();
  const titleRef = useRef();
  const nameRef = useRef();

  const handleChange = (e) => {
    const fixed = { ...card, [e.target.name]: e.target.value };
    onChange(fixed);
  };

  const handleDelete = (e) => {
    const fixed = { ...card, [e.target.name]: e.target.value };
    onDelete(fixed);
  };

  return (
    <li>
      <input
        ref={idRef}
        name="id"
        value={card.id}
        onChange={handleChange}
      ></input>
      <input
        ref={titleRef}
        name="title"
        value={card.title}
        onChange={handleChange}
      ></input>
      <input
        ref={nameRef}
        name="name"
        value={card.name}
        onChange={handleChange}
      ></input>
      <button onClick={handleDelete}>DELETE</button>
    </li>
  );
};

export default EditForm;
