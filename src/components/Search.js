import React, {useState} from "react";

function Search({listings, setListings}) {
const [search, setSearch] = useState("")

const handleChange = (e) => {
  setSearch(e.target.value)
}

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted")
    const newArr = listings.filter(listing => {
      return (listing.description.toLowerCase().includes(search))
      // .includes((e.target.value))
    })
    setListings(newArr)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleChange}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
