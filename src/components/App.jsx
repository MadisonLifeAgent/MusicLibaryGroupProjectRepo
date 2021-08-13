import React, { Component } from 'react';
import axios from 'axios'
import SongsTable from './SongsTable/SongsTable';
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

    render() {
        return (
            <div>
                <SongsTable songs={this.state.songs} />
                <AddSong createSong={this.createSong} /> 
                <Dashboard contents={<AddSong createSong={this.createSong} />} message="Add New Song" />
                
            </div>
        )
    }
}

export default App;