import React from 'react';

const Playlist = ({ playlist }) => {

  const { title, img, desc, created_at, id } = playlist
  return(
    <>
      <h3>{title}</h3>
      <h2>{img}</h2>
      <p>{desc}</p>
      <p>Created: {created_at}, id:{id}</p>
      <a href="/">Back</a><br />
      <a href={`/playlists/${id}/artists/`}>See what artists are on the playlist</a>
    </>
  )
}

export default Playlist;