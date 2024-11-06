import React from 'react';
import Gif from './gif';

function GifList (props) {
  function renderList () {
    return props.gifs.map(gif => <Gif id={gif} key={gif} />);
  }

  return (
    <div className="gif-list">
      {renderList()}
    </div>
  );
}

export default GifList;

// (alias) function Gif(props: any): React.JSX.Element
// import Gif
