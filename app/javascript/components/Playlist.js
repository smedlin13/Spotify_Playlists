import React from 'react';

const Playlist = ({ playlist }) => {

  const { title, img, desc } = playlist
  return(
    <>
      <h3>{title}</h3>
      <h2>{img}</h2>
      <p>{desc}</p>
      <a href="/">Back</a>
    </>
  )
}

export default Playlist;