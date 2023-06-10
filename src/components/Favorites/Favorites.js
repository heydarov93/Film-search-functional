import React, { useState } from "react";
import "./Favorites.css";
import { postFavoritesList } from "../../api/postList";
import CreateListButton from "../CreateListButton/CreateListButton";

const Favorites = ({ favorites, removeFavorite }) => {
  const [listDetails, setListDetails] = useState({
    title: "",
    listId: "",
    dataIsSent: false,
  });

  // set title for favorite films
  const onChangeTitle = (e) => {
    const { name, value } = e.target;
    setListDetails((prev) => ({ ...prev, [name]: value }));
  };
  // post favorite list into api
  const saveList = (e) => {
    e.preventDefault();
    const movies = { title: listDetails.title, movies: favorites };

    postFavoritesList(movies).then((postedData) => {
      if (postedData) {
        setListDetails((prev) => ({
          ...prev,
          listId: postedData.id,
          dataIsSent: !listDetails.dataIsSent,
        }));
      }
    });
  };

  // if title and favorite array are empty make the button disabled
  const disabled = !favorites.length || !listDetails.title.trim();

  // set button's text according process
  const text = listDetails.dataIsSent ? "Идет загрузка" : "Сохранить список";
  return (
    <div className="favorites">
      <input
        value={listDetails.title}
        className="favorites__name"
        placeholder="Введите название списка"
        name="title"
        onChange={onChangeTitle}
        disabled={listDetails.dataIsSent}
      />
      <ul className="favorites__list">
        {favorites.map((item) => {
          return (
            <li key={item.imdbID}>
              {item.Title} ({item.Year})
              <button
                type="button"
                disabled={listDetails.dataIsSent}
                onClick={(e) => {
                  e.preventDefault();
                  removeFavorite(item.imdbID);
                }}
              >
                X
              </button>
            </li>
          );
        })}
      </ul>
      <CreateListButton
        onClick={saveList}
        listId={listDetails.listId || null}
        disabled={disabled}
        text={text}
      />
    </div>
  );
};

export default Favorites;
