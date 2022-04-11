import React, { useState } from "react";

function ListingCard({description, id, location, image, handleRemove}) {
  const [favorite, setFavorite] = useState(true)

  const handleFavorite = () => {
    setFavorite((favorite) => !favorite)
  }

const toggleFavorite = favorite ? (
  <button onClick={handleFavorite} className="emoji-button favorite active">★</button>
) : (
  <button onClick={handleFavorite} className="emoji-button favorite">☆</button>
)

  return (
    <li id={id} className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {toggleFavorite}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={() => handleRemove(id)} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
