import React from 'react';

const ArtistNew = ({ playlist, artist }) => {

  const { name, desc } = artist 
  const defaultName = name ? name : ""
  const defaultDesc = desc ? desc : ""
  return (
    <>
      <h1>Add a New Artist</h1>
      <form action={`/playlists/${playlist.id}/artists`} method="post">
        <input
          type="text"
          placeholder="Artist Name"
          required
          defaultValue={defaultName}
          name="artist[name]]"
        />
        <input
          type="text"
          placeholder="Artist Description"
          required
          defaultValue={defaultDesc}
          name="artist[desc]"
        />
        <button type="submit">Add Artist to Playlist</button>

      </form>
      <a href="/">Back to Playlists</a>
    </>
  )

}

export default ArtistNew;