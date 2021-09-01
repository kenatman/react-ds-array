import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Editor from "./editor";
import Header from "./header";

const Main = ({ auth }) => {
  const history = useHistory();
  const [userId, setUserId] = useState(history?.location?.state?.uid);
  const [cards, setCards] = useState([
    { id: 1, title: `front-end engineer`, name: `YS` },
    { id: 2, title: `back-end engineer`, name: `HS` },
    { id: 3, title: `full-stack engineer`, name: `KS` },
  ]);

  useEffect(() => {
    auth.authChanged((user) => {
      if (user) {
        setUserId(user.uid);
      } else {
        history.push("/");
      }
    });
  }, []);

  const handleChange = (fixed) => {
    const fixedCards = [...cards];

    const result = fixedCards.map((card) => {
      if (card.id === fixed.id) {
        return fixed;
      } else {
        return card;
      }
    });
    setCards(result);
  };

  const handleDelete = (fixed) => {
    const fixedCards = [...cards];
    const result = fixedCards.filter((card) => card.id !== fixed.id);
    setCards(result);
  };

  const handleSubmit = (fixed) => {
    const result = [...cards, fixed];
    setCards(result);
  };
  return (
    <div>
      <Header auth={auth} />
      <Editor
        cards={cards}
        onChange={handleChange}
        onDelete={handleDelete}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default Main;
