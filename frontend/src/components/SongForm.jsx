import React, { useState } from 'react';

const SongForm = ({ fetchSongs }) => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');

//figure out which song obj from songs array matches

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = { title, artist };
 
    await fetch('/api/songs', { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(payload) });
  
    setTitle('');
    setArtist('');
    fetchSongs();
  };

  return (
    <>
    <form id='form-fill' onSubmit={handleSubmit}>
      <label>
        Song Title:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter song title"
          required
        />
      </label>
      <br />
      <label>
        Artist Name:
        <input
          type="text"
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
          placeholder="Enter artist name"
          required
        />
      </label>
      <br />
      <button type="submit">{'Add Song'}</button>
    </form>
  </>
  );
};

export default SongForm;