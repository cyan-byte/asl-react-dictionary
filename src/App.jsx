import "./App.css";
import React from "react";
import Dictionary from "./components/Dictionary";

function App() {
  return (
    <div className="app">
      <header>
        <h1>ASL DICTIONARY</h1>
        <img src="./open_book.png" className="open-book" />
      </header>
      <div className="search-and-dictionary">
        <Dictionary />
      </div>
      <footer>copyright 2023. Designed By Alisha Upton</footer>
    </div>
  );
}

export default App;
// LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz
