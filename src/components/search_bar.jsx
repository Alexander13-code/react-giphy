import React from 'react';

function SearchBar() {
  function handleUpdate (e) {
    console.log(e.target.value);
  }
  return (
    <input
      type="text"
      className="form-search form-control"
      onChange={handleUpdate}
    />
  );
}

export default SearchBar;
