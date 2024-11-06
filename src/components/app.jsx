import React, { Component, useState } from 'react';
import GifList from './gif_list';
import SearchBar from './search_bar';
import Gif from './gif';

class App extends Component {
  constructor(props) {
    super(props);

    let [gifs, setGifs] = useState([]);
    const [selectedGifId, setselectedGifId] = useState("vVzH2XY3Y0Ar6");
    this.state = {
      gifs: [],
      selectedGifId: "vVzH2XY3Y0Ar6"
      // d6UbuwWVKJHXO
    };
    setAnswers([...answers, answer]);


    search = (query) => {
      giphy('').search({
        q: query,
        rating: 'g',
        limit: 10
      }, (error, result) => {
        setGifs = result.data
      });
  }
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id selectedGifId />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
