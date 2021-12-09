import React from 'react';

const Playlists = ({ playlists }) => {

  
  return (
  <>
    <h1>Spotify Playlist</h1>
    {/* <h1>{playlists.name}</h1> */}
      
      { playlists.map( (playlist) => (
        <>
        <h3>{playlist.title}</h3>
        <a href={`/playlists/${playlist.id}`}>Show</a>
        <a href={`/playlists/${playlist.id}/edit`}>Edit</a>
        <a href={`/playlists/${playlist.id}`} data-method='delete'>Delete
        </a>
        </>  
      )) } 
    <button><a href="/playlists/new">Add Playlist</a></button> 
    <a href="/playlists/">Back</a>
  </>
  )
}

export default Playlists;