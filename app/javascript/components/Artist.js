import React from 'react';

const Artist = ({ artist }) => {

  const { name, desc, id } = artist
  return(
    <>
      <h3>{name}</h3>
      <p>{desc}</p>
      <p>Id:{id}</p>
      <a href={`/playlists`}>Back</a>
      <a href={`/artists/${id}/songs`}>See {name} songs</a>
    </>
  )
}

export default Artist;