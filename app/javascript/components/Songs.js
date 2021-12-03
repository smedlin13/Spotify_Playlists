import React from 'react';

const Songs = ({ artist, song, playlist }) => {

  const { name, id } = playlist
  

  const url = `/playlists/${playlist.id}/artists/${artist.id}/songs/`
  
  return (
  <>
    <h1>Songs by {artist.name}</h1>
      
    { songs.map( (song) => (
        <>
        <h3>{song.title}</h3>
        <p>{song.length}</p>
        <a href={`${url}${song.id}`}>Show</a>
        <a href={`${url}${song.id}/edit`}>Edit</a>
        <a href={`${url}${song.id}`} data-method='delete'>Delete
        </a>
        </>  
      )) } 
    <a href={`/playlists/${playlist.id}/artists/${artist.id}/songs/new`}>Add a song that the artist plays.</a>
    
  </>
  )
}

export default Songs;