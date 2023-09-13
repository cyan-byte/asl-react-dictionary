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
          // Concatenate the username and searchTerm in the API request URL. I needed to add the @ sign as a string and concatenate it with the username variable
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
          <button>search</button>
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

//----------------------------------------------

// import React, { useState, useEffect } from "react";
// import axios from "axios";
// // import "./App.css";

// // Define your GIPHY API key
// // process.env.APIKEY will hide your API key. You must add the .env file to your gitignore file
// const apiKey = "LvX7YrS5R1nKJxAi59xX0Ovby3TNP6oz";

// function Dictionary() {
//   // State to store GIF data
//   const [gifs, setGifs] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     // Function to fetch GIFs from GIPHY API
//     const fetchGifs = async () => {
//       try {
//         if (searchTerm) {
//           const response = await axios.get(
//             `https://api.giphy.com/v1/gifs/search?q=@signwithrobert&@InvestInAccess&${searchTerm}&api_key=${apiKey}&limit=10`
//           );

//           // Extract the GIF URLs from the API response
//           const gifData = response.data.data.map(
//             (gif) => gif.images.original.url
//           );
//           setGifs(gifData);
//         } else {
//           // Clear the data when searchTerm is empty
//           setGifs([]);
//         }
//       } catch (error) {
//         console.error("Error fetching GIFs:", error);
//       }
//     };
//     const timer = setTimeout(() => {
//       fetchGifs();
//     }, 500);
// // Results were popping up just by typing one letter
// // The following clears the timer on each keypress to prevent rapid requests
//     return() => clearTimeout(timer);
//   }, [searchTerm]);

//   // Function to handle search input change
//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   return (
//     <div className="dictionary">
//       <input
//         type="text"
//         placeholder="Type in a word"
//         value={searchTerm}
//         onChange={handleSearchChange}
//         style={{ textIndent: "-9999px" }}
//       />

//       <div className="GifContainer">
//         {gifs.map((gifUrl, index) => (
//           <img
//             key={index}
//             src={gifUrl}
//             alt={`GIF ${index + 1}`}
//             className="gif"
//           />
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Dictionary;

// ----------------------------------------------------------------------------------------------
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
