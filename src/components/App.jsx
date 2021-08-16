import React, { Component } from 'react';
import axios from 'axios'
import FilterSongs from './FilterSongs/FilterSongs';
import AddSong from './AddSong/AddSong';
import Dashboard from './Dashboard/Dashboard';


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
            if (response.status < 400) {
                this.getSongs();
            }
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    // deleteSong

    // updateSong
    editSong = (song) => {
        this.updateSong(song);
    }

    // api call to post new song
    async udpateSong(song) {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/songs/detail/${song.id}`);
            if (response.status < 400) {
                this.getSongs();
            }
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    render() {
        if (this.state.songs.length === 0) {
            return (<h1>Sorry, no songs available!</h1>)
        } else {
            return (
                <div>
                    <FilterSongs songs={this.state.songs} updateSong={this.udpateSong} />
                    <AddSong createSong={this.createSong} /> 
                    <Dashboard contents={<AddSong createSong={this.createSong} />} message="Add New Song" />
                </div>
            )
        }
    }
}

export default App;