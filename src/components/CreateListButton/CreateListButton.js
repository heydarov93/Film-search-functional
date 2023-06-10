import React from "react";
import { Link } from "react-router-dom";

const CreateListButton = ({ onClick, listId, disabled, text }) => {
  return !listId ? (
    <button
      type="button"
      className="favorites__save"
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </button>
  ) : (
    <Link target="_blank" to={`/list/${listId}`}>
      Перейти к списку
    </Link>
  );
};

export default CreateListButton;
