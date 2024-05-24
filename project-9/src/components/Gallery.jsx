import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Gallery = () => {
  const [characterData, setCharacterData] = useState(null);
  // declare the loading state below
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const fetchCharacterData = async () => {
      try {
        // Fetching Data
        const response = await fetch(
          "https://thronesapi.com/api/v2/Characters"
        );
        // Parsing Response
        const data = await response.json();
        // Extracting Data
        const allCharacterData = data;
        // Updating State
        setCharacterData(allCharacterData);
        setIsLoading(false); // Data has been fetched, update loading state
      } catch (error) {
        console.log("Error fetching character data:", error);
      }
    };
    // Call the fetchCharacterData function
    fetchCharacterData();
  }, []);
  if (isLoading) {
    return (
      <>
        <div className="loading-container">
          <p className="loading">Loading...</p>
        </div>
      </>
    );
  } else {
    return (
      <>
        <main className="gallery">
          <h1 className="gallery-title">Character Gallery</h1>
          <div className="gallery-container">
            {characterData.map((character) => {
              return (
                <div key={character.id} className="gallery-item">
                  <Link to={`/detail/${character.id}`}>
                    <img
                      src={character.imageUrl}
                      alt={character.fullName}
                      className="gallery-item-image"
                    />
                    <h2 className="gallery-item-title">{character.fullName}</h2>
                  </Link>
                </div>
              );
            })}
          </div>
        </main>
      </>
    );
  }
};

export default Gallery;
