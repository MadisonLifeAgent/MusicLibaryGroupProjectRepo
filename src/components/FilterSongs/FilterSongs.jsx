import React, { Component, useState } from 'react';
import SongsTable from '../SongsTable/SongsTable'
import './FilterSongs.css';

const FilterSongs = (props) => {
    const songs = props.songs;

    const [title, setTitle] = useState("");
    const [artist, setArtist] = useState("");
    const [album, setAlbum] = useState("");
    const [genre, setGenre] = useState("");
    const [release, setRelease] = useState("");

    const updateFilters = (field, value) => {
        let tempState = {title: title, artist: artist, album: album, genre: genre, release: release}

        switch (field) {
            case "title":
                tempState.title = value;
                setTitle(value);
                break;
            case "artist":
                tempState.artist = value;
                setArtist(value);
                break;
            case "album":
                tempState.album = value;
                setAlbum(value);
                break;
            case "genre":
                tempState.genre = value;
                setGenre(value);
                break;
            case "release":
                tempState.release = value;
                setRelease(value);
                break;
            default:
                break;
        }

        debugger;
        props.updateFilters(tempState);
    }

    return (
        <div class="col-sm-12">
            <h4 class="mt-2 mb-2" id="find-songs">Find Song(s)</h4>
            <form class="align-items-center">
                <input class="col-sm-2 mb-3 me-2" id="form-border" type="text" value={title} onChange={e => updateFilters("title", e.target.value)} placeholder="Song Title"/>
                <input class="col-sm-2 mb-3 me-2" id="form-border" type="text" value={artist} onChange={e => updateFilters("artist", e.target.value)} placeholder="Artist" />
                <input class="col-sm-2 mb-3 me-2" id="form-border" type="text" value={album} onChange={e => updateFilters("album", e.target.value)} placeholder="Album"/>
                <input class="col-sm-2 mb-3 me-2" id="form-border" type="text" value={genre} onChange={e => updateFilters("genre", e.target.value)} placeholder="Genre" />
                <input class="col-sm-2 mb-3 me-2" id="form-border" type="date" value={release} onChange={e => updateFilters("release", e.target.value)} placeholder="Release Date" />
            </form>
        </div>
    )
}

export default FilterSongs;