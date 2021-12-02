import React from 'react';

const Playlists = ({ playlists }) => {
  return (
  <>
    <h1>Spotify Playlist</h1>
      
      { playlists.map( (playlist) => (
        <>
        <h3>{playlist.title}</h3>
        <a href={`/playlists/${playlist.id}`}>Show</a>
        <a href={`/playlists/${playlist.id}/edit`}>Edit</a>
        <a href={`/playlists/${playlist.id}`} data-method='delete'>Delete
        </a>
        </>  
      )) } 
    <a href="/playlists/new">Add Song to Playlist</a> 
  </>
  )
}

export default Playlists;