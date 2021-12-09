import React from 'react';

const SongNew = ({ song, artist }) => {

  const { title, length } = song 
  const defaultTitle = title ? title : ""
  const defaultLength = length ? length : ""

  return (
    <>
      <h1>Add a New Song</h1>
      <form action={`/artists/${artist.id}/songs`} method="post">
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
          defaultValue={defaultLength}
          name="song[length]"
                  />
      
        <button type="submit">Add Song</button>

      </form>
      <a href={`/artists/${artist.id}`}>Back to Artist</a>
    </>
  )

}

export default SongNew;