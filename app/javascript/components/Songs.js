import React from 'react';

const Songs = ({ songs, artist }) => {

  // const { id } = playlist
  
  const { title, length } = songs
  
  const url = `/artists/${artist.id}/songs/`
  
  return (
  <>
    <h1>Songs by {artist.name}</h1>
      
    { songs.map( (song) => (
        <>
        <h3>{song.title}</h3>
        <p>{song.length}</p>
        <a href={`${url}${song.id}`}>Play Song</a><br />
        <a href={`${url}${song.id}/edit`}>Edit Song Title</a><br />
        <a href={`${url}${song.id}`} data-method='delete'>Delete Song</a>
        </>  
      )) } 
      <br /><br />
    <a href={`/artists/${artist.id}/songs/new`}>Add a song that the artist plays.</a>
    <br />
    <a href={`/`}>Back to Playlists</a>
  </>
  )
}

export default Songs;