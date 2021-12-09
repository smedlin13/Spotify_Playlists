import React from 'react';

const Song = ({ artist, song }) => {

  const { title, length, id } = song
  // const { name } = artist
  return(
    <>
      <h3>Playing: {song.title} </h3>
      <h4>By Artist: {artist.name}</h4>
      <p>Song will play for {song.length} minutes.</p>
      <p>Id:{song.id}</p>
      <a href={`/artists/${artist.id}/songs`}>Back to Artist</a>
    </>
  )
}

export default Song;