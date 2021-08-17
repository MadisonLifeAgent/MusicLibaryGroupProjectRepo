import React, { Component } from 'react';
import axios from 'axios';
import FilterSongs from './FilterSongs/FilterSongs';
import AddSong from './AddSong/AddSong';
import Dashboard from './Dashboard/Dashboard';
import './App.css';


class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            songs: []
        };
    }

    componentDidMount() {
        this.getSongs();
    }

    async getSongs() {
        try{
            let response = await axios.get("http://127.0.0.1:8000/songs/");
            this.setState({
                songs: response.data
            })
            this.forceUpdate()
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    // newSong
    createSong = (newSong) => {
        this.newSong(newSong);
    }

    async newSong(song) {
        try{
            let response = await axios.post("http://127.0.0.1:8000/songs/", song);
            let currentSongs = this.state.songs;
            currentSongs.push(response.data);
            this.setState({
                songs: currentSongs});
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    // api call to update a song
    async udpateSong(song) {
        try{
            let response = await axios.put(`http://127.0.0.1:8000/songs/detail/${song.id}`, song);

            // Manually update the context
            let currentSongIndex = this.state.songs.findIndex( (stateSong) => stateSong.id === song.id );
            let allSongs = this.state.songs;
            allSongs[currentSongIndex] = song;
            this.setState({
                songs: allSongs
            });
        } catch (ex) {
            console.log("API call failed.");
        }
    }
    
    // Call the async update method
    editSong = (song) => {
        this.udpateSong(song);
    }

    // delete song
    deleteSong = (song) => {
        this.deleteOneSong(song);
    }

    // api call to update a song
    async deleteOneSong(song) {
        try{
            let response = await axios.delete(`http://127.0.0.1:8000/songs/detail/${song.id}`);

            console.log(response.status);
            // Manually update the context
            let remainingSongs = this.state.songs;
            remainingSongs = remainingSongs.filter( (stateSong) => { return (stateSong.id !== song.id) });
            this.setState({
                songs: remainingSongs
            });
        } catch (ex) {
            console.log("API call failed.");
        }
    }


    render() {
        if (this.state.songs.length === 0) {
            return (<h1>Sorry, no songs available!</h1>)
        } else {
            return (
                <div class="p-3" id="default-font">
                    <div>
                        <header id="logo">Jukebox Hero</header>
                    </div>
                    <div class="container-fluid p-2 mb-2" id="table-border">
                        <FilterSongs songs={this.state.songs} updateSong={this.editSong} deleteSong={this.deleteSong} />
                    </div>
                    <div class="row mb-2">
                        <AddSong createSong={this.createSong.bind(this)} />
                    </div>
                        <Dashboard contents={<AddSong createSong={this.createSong} />} message="Add New Song"/>
                </div>
            )
        }
    }
}

export default App;