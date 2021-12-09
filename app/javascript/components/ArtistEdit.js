import React from 'react';

const ArtistEdit = ({ playlist, artist }) => {

  const { name, desc } = artist
  const defaultName = name ? name : ""
  const defaultDesc = desc ? desc: ""
  return (
    <>
      <h1>Edit the Artist</h1>
      <form action={`/playlists/${playlist.id}/artists/${artist.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          type="text"
          placeholder="Artist Name"
          required
          defaultValue={defaultName}
          name="artist[name]"
        />
        <input
        type="text"
        placeholder="Artist Description"
        required
        defaultValue = {defaultDesc}
        name="artist[desc]"
        />
        <button type="submit">Add Artist</button>

      </form>
      <a href="/playlists">Back to Playlists</a>
    </>
  )

}

export default ArtistEdit;