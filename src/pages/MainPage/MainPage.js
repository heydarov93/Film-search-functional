import React, { useState } from "react";
import "./MainPage.css";
import Header from "../../components/Header/Header";
import SearchBox from "../../components/SearchBox/SearchBox";
import Movies from "../../components/Movies/Movies";
import Favorites from "../../components/Favorites/Favorites";

const MainPage = () => {
  const [searched, setSearched] = useState([]);
  const [favorites, setFavorites] = useState([]);

  // store searched movies
  const storeSearched = (data) => {
    setSearched(data);
  };

  // add movies into favorites list
  const storeFavorites = (id) => {
    const data = searched.find((movie) => movie.imdbID === id);
    const alreadyAdded = favorites.find((movie) => movie.imdbID === id);
    if (!alreadyAdded) setFavorites((prev) => [...prev, data]);
  };

  // remove movie from favorites
  const removeFavorite = (id) => {
    const updatedFavorites = favorites.filter((movie) => movie.imdbID !== id);

    setFavorites(updatedFavorites);
  };

  return (
    <div className="main-page">
      <Header />
      <main className="main-page__content">
        <section className="main-page__main-section">
          <div className="main-page__search-box">
            <SearchBox setSearched={storeSearched} />
          </div>
          <div className="main-page__movies">
            <Movies movies={searched} setFavorites={storeFavorites} />
          </div>
        </section>
        <aside className="main-page__favorites">
          <Favorites favorites={favorites} removeFavorite={removeFavorite} />
        </aside>
      </main>
    </div>
  );
};

export default MainPage;
