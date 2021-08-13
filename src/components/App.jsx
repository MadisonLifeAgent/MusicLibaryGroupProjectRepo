import React, { Component } from 'react';
import axios from 'axios'
import SongsTable from './SongsTable/SongsTable';
import AddSong from './AddSong/AddSong';


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
        this.state.push(newSong);
    }

    // deleteSong

    // updateSong

    render() {
        return (
            <div>
                <SongsTable songs={this.state.songs} />
                <AddSong createSong={this.createSong} /> 
            </div>
        )
    }
}

export default App;