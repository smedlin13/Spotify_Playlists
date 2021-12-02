import React from 'react';

const Artist = ({ playlist, artist }) => {

  const { name, desc, id } = artist
  return(
    <>
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>Id:{id}</p>
      <a href={`/playlists/${playlist.id}`}>Back</a>
      <a href={`/playlists/${id}/artists/`}>See {artist.name} songs</a>
    </>
  )
}

export default Artist;