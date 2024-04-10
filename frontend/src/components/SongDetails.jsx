import React from 'react';

const SongDetails = ({ song, updateSong }) => (
  <div>
    <h2>{song.title}</h2>
    <p>Artist: {song.artist}</p>
    <AddSong song={song} updateSong={updateSong} />
  </div>
);

export default SongDetails;
