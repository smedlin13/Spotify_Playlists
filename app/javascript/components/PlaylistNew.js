import React from 'react';

const PlaylistNew = ({ playlist }) => {

  const { title, img, desc } = playlist 
  const defaultTitle = title ? title : ""
  const defaultImg = img ? img: ""
  const defaultDesc = desc ? desc: ""
  return (
    <>
      <h1>Add a New Playlist</h1>
      <form action="/playlists" method="post">
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
          name="playlist[img]"
        />
        <textarea
        required
        defaultValue = {defaultDesc}
        name="playlist[desc]"></textarea>
        <button type="submit">Add Playlist</button>

      </form>
      <a href="/">Back to Playlists</a>
    </>
  )

}

export default PlaylistNew;