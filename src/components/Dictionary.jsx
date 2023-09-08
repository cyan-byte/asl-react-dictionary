import React, { useState, useEffect } from "react";
import axios from "axios";
// import "./App.css";

// Define your GIPHY API key
// process.env.APIKEY will hide your API key. You must add the .env file to your gitignore file
const apiKey = "LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz";

function Dictionary() {
  // State to store GIF data
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to fetch GIFs from GIPHY API
  const fetchGifs = async () => {
    try {
      if (searchTerm) {
        const response = await axios.get(
          `https://api.giphy.com/v1/gifs/search?q=@signwithrobert&${searchTerm}&api_key=${apiKey}&limit=10`
        );

        // Extract the GIF URLs from the API response
        const gifData = response.data.data.map(
          (gif) => gif.images.original.url
        );
        setGifs(gifData);
      } else {
        // Clear the data when searchTerm is empty
        setGifs([]);
      }
    } catch (error) {
      console.error("Error fetching GIFs:", error);
    }
  };

  // Effect to fetch GIFs when searchTerm changes
  useEffect(() => {
    fetchGifs();
  }, [searchTerm]);

  // Function to handle search input change
  const handleSearchChange = (event) => {
    setSearchTerm(`@signwithrobert ${event.target.value}`);
  };
  const handleSearchSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
  
    // Trigger the API request with the current searchTerm
    fetchGifs();
  };

  return (
    <div className="dictionary">
      <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        placeholder="Type in a word"
        value={searchTerm.replace('@signwithrobert', '')}
        onChange={handleSearchChange}
        style={{textIndent: '-9999px'}}
      />
      <input type="submit" onClick={handleSearchChange} />
      </form>
      <div className="GifContainer">
        {gifs.map((gifUrl, index) => (
          <img
            key={index}
            src={gifUrl}
            alt={`GIF ${index + 1}`}
            className="gif"
          />
        ))}
      </div>
    </div>
  );
}

export default Dictionary;

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function Dictionary() {
//   const [data, setData] = useState([]);
//   //state for this application
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     const apiKey = "LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz";

//     // This fetches the ASL GIFs from the GIPHY API when the component mounts or searchTerm changes
//     // Fetch ASL GIFs from GIPHY when the component mounts or searchTerm changes

//     // Function to fetch the GIFs
//     const fetchGifs = async () => { // any time you use async, you need to use await
//       try {
//         if (searchTerm) {
//           // make a fetch request and store the response
//           const response = await axios.get(
//             `https://api.giphy.com/v1/gifs/search?q=ASL&${searchTerm}&api_key=${apiKey}&limit=10`
//           );

//           // https://api.giphy.com/v1/gifs/search?q=ASL&api_key=LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz

//           // Extract the GIF URLs from the API response
//           const gifs = response.data.data.map((gif) => gif.images.original.url);
//           setData(gifs);
//         } else {
//           // Clear the data when searchTerm is empty
//           setData([]);
//         }
//       } catch (error) {
//         console.error("Error fetching ASL GIFs:", error);
//       }
//     };

//     fetchGifs();
//   }, [searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   return (
//     <div className="dictionary">
//       Dictionary Rendering Area
//       {/* component used for displaying ASL sign GIFs */}
//       <input
//         type="text"
//         placeholder="Type in a word"
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <input type='submit' value='submit'/>

//       <div className="GifContainer">
//         {data.map((gifUrl, index) => (
//           <img
//             key={index}
//             src={gifUrl}
//             alt={`ASL GIF ${index + 1}`}
//             className="Gif"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// API Key: LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz
