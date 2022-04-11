import React from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ listings, setListings }) {

  const handleRemove = (id) => {
    fetch(`http://localhost:6001/listings/${id}`, { method: "DELETE" })
      .then(r => r.json())
      .then(data => {
        const newArr = listings.filter(listing => listing.id !== id)
        setListings(newArr)
      })
  }

  const singlePost = listings.map(listing => <ListingCard description={listing.description} key={listing.id} id={listing.id} image={listing.image} location={listing.location} handleRemove={handleRemove}/>
  )

  return (
    <main>
      <ul className="cards">
        {singlePost}
      </ul>
    </main>
  );
}

export default ListingsContainer;
