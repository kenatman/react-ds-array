import React from "react";
import AddForm from "./addForm";

import EditForm from "./editForm";

const Editor = ({ cards, onChange, onDelete, onSubmit }) => {
  return (
    <>
      <ul>
        {cards.map((card) => (
          <EditForm
            key={card.id}
            card={card}
            onChange={onChange}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <AddForm onSubmit={onSubmit} />
    </>
  );
};

export default Editor;
