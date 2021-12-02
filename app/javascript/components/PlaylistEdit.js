import React from 'react';

const PlaylistEdit = ({ playlist }) => {

  const { title, img, desc } = playlist 
  const defaultTitle = title ? title : ""
  const defaultImg = img ? img: ""
  const defaultDesc = desc ? desc: ""
  return (
    <>
      <h1>Edit the Playlist</h1>
      <form action={`/playlists/${playlist.id}`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          type="text"
          placeholder="Playlist Name"
          required
          defaultValue={defaultTitle}
          name="playlist[title]"
        />
        <input
          type="text"
          placeholder="Image Description"
          required
          defaultValue={defaultImg}
          name="playlist[image]"
        />
        <textarea
        required
        defaultValue = {defaultDesc}
        name="playlist[desc]"></textarea>
        <button type="submit">Add Playlist</button>

      </form>
      <a href="/playlists">Back to Playlists</a>
    </>
  )

}

export default PlaylistEdit;