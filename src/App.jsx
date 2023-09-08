import "./App.css";
import React, { Component } from "react";
import Dictionary from "./components/Dictionary";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <p>WELCOME TO</p>
      <h1><span className="small-header-text">The</span> ASL <br/>
      Dictionary
      <br/><span className="small-header-text">by</span>
      Alisha U.</h1>
      <SearchBar />
      <Dictionary />
    </div>
  );
}

export default App;
// LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz