import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import SongForm from './components/SongForm.jsx';
import SongDetails from './components/SongDetails';
import SongList from './components/SongList';

const App = () => {
  const [songs, setSongs] = useState([]);

  const fetchSongs = async () => {
    const response = await fetch('/api/songs');
    const data = await response.json();
    setSongs(data);
  };

  useEffect(() => {
    fetchSongs();
  }, []);

  const deleteSong = async (id) => {
    await fetch(`/api/songs/${id}`, { method: 'DELETE' });
    fetchSongs();
  };

  console.log(songs);

  return (
    <Router>
      <div id='main'>
        <h1>Songs Playlist</h1>
        <Link to="/">Home</Link>
        <Routes>
          <Route path="/" element={
            <>
              <SongForm fetchSongs={fetchSongs}/>
              <SongList songs={songs} deleteSong={deleteSong} />
            </>
          } />
          <Route path="/songs/:id" element={
            <SongDetails updateSong={fetchSongs} />
          } />
        </Routes>
      </div>
    </Router>
  );
};


export default App;
