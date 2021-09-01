import React, { useRef } from "react";

const AddForm = ({ onSubmit }) => {
  const idRef = useRef();
  const titleRef = useRef();
  const nameRef = useRef();

  const handleSubmit = () => {
    const created = {
      id: idRef.current.value,
      title: titleRef.current.value,
      name: nameRef.current.value,
    };
    onSubmit(created);
  };

  return (
    <li>
      <input ref={idRef} name="id"></input>
      <input ref={titleRef} name="title"></input>
      <input ref={nameRef} name="name"></input>
      <button onClick={handleSubmit}>SUBMIT</button>
    </li>
  );
};
export default AddForm;
