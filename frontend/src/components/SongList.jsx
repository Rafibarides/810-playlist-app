import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const SongList = ({ songs, deleteSong }) => {
  return (
    <ul>
      {songs.map((song) => (
        <li key={song.id}>
          {song.title} by {song.artist}
          <Link to={`/songs/${song.id}`}>Edit</Link>
          <button onClick={() => deleteSong(song.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default SongList;
