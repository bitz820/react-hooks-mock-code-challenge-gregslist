import React, {useEffect, useState} from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {

  const [listings, setListings] = useState([])

  useEffect(()=> {
    fetch("http://localhost:6001/listings")
    .then(r => r.json())
    .then(data => setListings(data))
  }, [])

console.log(listings)
  return (
    <div className="app">
      <Header listings={listings} setListings={setListings}/>
      <ListingsContainer listings={listings} setListings={setListings} />
    </div>
  );
}

export default App;
