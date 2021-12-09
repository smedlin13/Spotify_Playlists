import React from 'react';

const Artists = ({ playlist, artists }) => {

  const { title, desc, img, id } = playlist
  

  const url = `/playlists/${id}/artists`
  
  return (
  <>
    <h1>Artists in {playlist.title}</h1>
      
    { artists.map( (artist) => (
        <>
        <h3>{artist.name}</h3>
        <p>{artist.desc}</p>
        <a href={`${url}/${artist.id}`}>Show</a><br />
        <a href={`${url}/${artist.id}/edit`}>Edit</a><br />
        <a href={`${url}/${artist.id}`} data-method='delete'>Delete<br /><br />
        </a>
        </>  
      )) } 
    <button type="submit"><a href={`/playlists/${id}/artists/new`}>Add a song to the playlist.</a></button>
    <br />
    <a href={`/playlists/${id}/`}>Back to Playlist</a>
  </>
  )
}

export default Artists;