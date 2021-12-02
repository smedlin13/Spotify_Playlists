import React from 'react';

const ArtistEdit = ({ playlist, artist }) => {

  const { name, desc, id } = artist
  const defaultName = name ? name : ""
  const defaultDesc = desc ? desc: ""
  return (
    <>
      <h1>Edit the Artist</h1>
      <form action={`/playlists/${playlist.id}/artists/${id}`} method="post">
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
        name="artist[desc]"></textarea>
        <button type="submit">Add Artist</button>

      </form>
      <a href="/playlists">Back to Playlists</a>
    </>
  )

}

export default ArtistEdit;