import React from 'react';

function Gif(props) {
  const { id } = props;
  const src = `https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExaWR3ZGRtdDV5ZmxzbzJiZG53NjFyaHJ0MjZ5Z2FnYW41czYwd2o4cyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/${id}/giphy.gif`;
  return (
    <img src={src} alt="" className="gif" />
  );
}

export default Gif;
