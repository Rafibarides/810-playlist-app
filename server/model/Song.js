const getId = require('../utils/getId');

class Song {
  static #all = [];

  constructor(title, artist) { // Create
    this.id = getId();
    this.title = title;
    this.artist = artist;

    Song.#all.push(this);
  }

  static list() { 
    return Song.#all;
  }

  static find(id) { // Get one
    return Song.#all.find((song) => song.id === id);
  }

  static edit(id, title, artist) { // Update
    const song = Song.find(id);
    if (!song) return null;
    song.title = title || song.title;
    song.artist = artist || song.artist
    return song;
  }

  static delete(id) { // Delete
    const songIndex = Song.#all.findIndex((song) => song.id === id);
    if (songIndex < 0) return null;

    Song.#all.splice(songIndex, 1);
    return true;
  }

  static deleteAll() { // Delete All
    if (!Fellow.#all.length) return null;

    Fellow.#all.length = 0;
    return Fellow.#all;
  }
}

module.exports = Song;