import React from 'react';
import GifList from './gif_list';
import SearchBar from './search_bar';
import Gif from './gif';

function App() {
  const gifs = [
    { id: "vVzH2XY3Y0Ar6" },
    { id: "d6UbuwWVKJHXO" }
  ];

  return (
    <div>
      <div className="left-scene">
        <SearchBar />
        <div className="selected-gif">
          <Gif id="vVzH2XY3Y0Ar6" />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifs={gifs} />
      </div>
    </div>
  );
}

export default App;
