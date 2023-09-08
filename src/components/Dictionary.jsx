import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Dictionary() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const apiKey = "LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz";

    // This fetches the ASL GIFs from the GIPHY API when the component mounts or searchTerm changes
    // Fetch ASL GIFs from GIPHY when the component mounts or searchTerm changes
    const fetchGifs = async () => {
      try {
        if (searchTerm) {
          const response = await axios.get(
            `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&limit=10`
          );

          // Extract the GIF URLs from the API response
          const gifs = response.data.data.map((gif) => gif.images.original.url);
          setData(gifs);
        } else {
          // Clear the data when searchTerm is empty
          setData([]);
        }
      } catch (error) {
        console.error("Error fetching ASL GIFs:", error);
      }
    };

    fetchGifs();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="dictionary">
      Dictionary Rendering Area
      {/* component used for displaying ASL sign GIFs */}
      <input
        type="text"
        placeholder="Type in a word"
        value={searchTerm}
        onChange={handleSearch}
      />
      <div className="GifContainer">
        {data.map((gifUrl, index) => (
          <img
            key={index}
            src={gifUrl}
            alt={`ASL GIF ${index + 1}`}
            className="Gif"
          />
        ))}
      </div>
    </div>
  );
}

// API Key: LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz
