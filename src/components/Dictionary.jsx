import React, { useState, useEffect } from "react";
import axios from "axios";

const apiKey = "LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz";
const username = "signwithrobert"; // specifies the GIPHY username to search for

function Dictionary() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchGifs = async () => {
      try {
        if (searchTerm) {
          // Concatenate the username and searchTerm in the API request URL.
          // I needed to add the @ sign as a string and concatenate it with the username variable
          const response = await axios.get(
            `https://api.giphy.com/v1/gifs/search?q=${
              `@` + username
            } ${searchTerm}&api_key=${apiKey}&limit=20`
          );

          const gifData = response.data.data.map(
            (gif) => gif.images.original.url
          );
          setGifs(gifData);
        } else {
          setGifs([]); // Clear the data when searchTerm is empty
        }
      } catch (error) {
        console.error("Error fetching GIFs:", error);
      }
    };

    // Call fetchGifs when searchTerm changes
    fetchGifs();
  }, [searchTerm]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="dictionary">
      <div className="top-search">
        <div className="left-top-box"></div>
        <div className="right-top-box">
          <p className="search-bar">Type in a word</p>
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearchChange}
            // style={{ textIndent: "-9999px" }}
          />
        </div>
      </div>
      <div className="gif-container">
        {gifs.length === 0 ? (
          <img src="./no-results-purple.png" />
        ) : (
          gifs.map((gifUrl, index) => (
            <img
              key={index}
              src={gifUrl}
              alt={`GIF ${index + 1}`}
              className="gif"
            />
          ))
        )}
      </div>
    </div>
  );
}

export default Dictionary;
