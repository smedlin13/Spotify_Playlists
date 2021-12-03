import React from 'react';

const SongEdit = ({ song, playlist, artist }) => {

  const { title, length } = song 
  const defaultTitle = title ? title : ""
  const defaultLength = length ? title : ""

  return (
    <>
      <h1>Edit the Song</h1>
      <form action={`/playlists/${playlist.id}/artists/${artist.id}/songs`} method="post">
        <input type="hidden" name="_method" value="patch" />
        <input
          type="text"
          placeholder="Song Name"
          required
          defaultValue={defaultTitle}
          name="song[title]"
        />
        <input
          type="integer"
          placeholder="Song Length"
          required
          defaultValue={default Length}
          name="song[length]"
                  />
      
        <button type="submit">Add Song</button>

      </form>
      <a href={`/playlists/${playlist.id}/artist/${artist.id}/`}>Back to Artist</a>
    </>
  )

}

export default SongEdit;