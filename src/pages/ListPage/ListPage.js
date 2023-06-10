import React, { useEffect, useState } from "react";
import "./ListPage.css";
import { fetchFavoriteList } from "../../api/fetchFavoriteList";
import { useParams } from "react-router-dom";

const ListPage = () => {
  const [favoriteList, setFavoriteList] = useState({
    title: "",
    movies: [],
    id: "",
    loading: true,
  });
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await fetchFavoriteList(id);
        setFavoriteList((prev) => ({ ...prev, ...data }));
      } catch (err) {
        console.error(err);
      } finally {
        setFavoriteList((prev) => ({ ...prev, loading: false }));
      }
    }
    fetchData();
  }, []);

  return (
    <div className="list-page">
      <h1 className="list-page__title">Мой список</h1>
      <ul>
        {favoriteList.loading
          ? "loading..."
          : favoriteList.movies.map((item) => {
              return (
                <li key={item.imdbID}>
                  <a
                    href={`https://www.imdb.com/title/${item.imdbID}/`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.Title} ({item.Year})
                  </a>
                </li>
              );
            })}
      </ul>
    </div>
  );
};

export default ListPage;
