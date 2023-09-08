import "./App.css";
import React, { Component } from "react";
import Dictionary from "./components/Dictionary";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1>ASL React Dictionary</h1>
      <SearchBar />
      <Dictionary />
    </div>
  );
}

export default App;
