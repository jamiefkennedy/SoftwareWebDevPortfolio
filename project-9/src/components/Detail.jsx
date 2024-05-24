import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
const Detail = () => {
  const { id } = useParams();
  const [characterDetail, setCharacterDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchCharacterDetail = async () => {
      try {
        const response = await fetch(
          `https://thronesapi.com/api/v2/Characters/${id}`
        );
        const data = await response.json();
        setCharacterDetail(data);
        setIsLoading(false);
      } catch (error) {
        console.log("Error fetching character details:", error);
      }
    };
    fetchCharacterDetail();
  }, [id]);
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
        <main className="detail">
          <h1>Character Details</h1>
          <div className="detail-container">
            <div className="detail-image-container">
              <img
                src={characterDetail.imageUrl}
                alt={characterDetail.fullName}
                className="detail-image"
              />
            </div>
            <div className="detail-name-info-container">
              <h2 className="detail-name">{characterDetail.fullName}</h2>
              <div className="detail-title-container">
                <h3 className="detail-title">Title</h3>
                <p className="title-text">{characterDetail.title}</p>
              </div>
              <div className="detail-family-container">
                <h3 className="detail-family">Family</h3>
                <p className="family-text">{characterDetail.family}</p>
              </div>
            </div>
          </div>
        </main>
      </>
    );
  }
};
export default Detail;
