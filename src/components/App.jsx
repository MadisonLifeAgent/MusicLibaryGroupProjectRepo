import React, { Component } from 'react';
import axios from 'axios';
import FilterSongs from './FilterSongs/FilterSongs';
import SongsTable from './SongsTable/SongsTable';
import Dashboard from './Dashboard/Dashboard';
import './App.css';


class App extends Component {

    /**************************************/
    /*     COMPONENT SPECIFIC METHODS     */
    /**************************************/
    constructor(props) {
        super(props);
        this.state = {
            songs: [],
            filteredSongs: [],
            filterValues: {
                title: "",
                artist: "",
                album: "",
                genre: "",
                releaseDate: "",
                likes: ""
            }
        };
    }

    componentDidMount() {
        this.initialize()
    }

    async initialize() {
        let songs = await this.getSongs();
        this.setState({
            songs: songs,
            filteredSongs: songs
        })
    }

    /******************************************/
    /*     API CALLS AND HELPERS              */
    /******************************************/


    async getSongs() {
        try{
            let response = await axios.get("http://127.0.0.1:8000/songs/");
            return response.data
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    async refreshSongs(callback, value) {
        await callback(value);
        let songs = await this.getSongs();
        this.setState({
            songs: songs
        })
        this.filterSongs(this.state.filterValues);
    }

    async createSong(song) {
        try{
            let response = await axios.post("http://127.0.0.1:8000/songs/", song);
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    async editSong(song) {
        try{
            let response = await axios.put(`http://127.0.0.1:8000/songs/detail/${song.id}`, song);
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    async deleteSong(song) {
        try{
            let response = await axios.delete(`http://127.0.0.1:8000/songs/detail/${song.id}`);
        } catch (ex) {
            console.log("API call failed.");
        }
    }

    async likeSong(song) {
        try{
            let response = await axios.get(`http://127.0.0.1:8000/songs/like/${song.id}`);
        } catch (ex) {
            console.log("API call failed.");
        }
    }


    /************************************/
    /*          FILTERING               */
    /************************************/
    filterSongs = (tempState) => {
        let filters = tempState;
        let newFilteredSongs = this.state.songs.filter( (song) => {
            let addSong = true;

            if(filters.title) {
                if (!song.title.toLowerCase().includes(filters.title.toLowerCase())) {
                    addSong = false;
                }
            } 
            
            if(addSong && filters.artist) {
                if (!song.artist.toLowerCase().includes(filters.artist.toLowerCase())) {
                    addSong = false;
                }
            } 
            
            if(addSong && filters.album) {
                if (!song.album.toLowerCase().includes(filters.album.toLowerCase())) {
                    addSong = false;
                }
            } 
            
            if(addSong && filters.genre) {
                if (!song.genre.toLowerCase().includes(filters.genre.toLowerCase())) {
                    addSong = false;
                }
            } 
            
            if(addSong && filters.release) {
                if (!(song.release_date === filters.release)) {
                    addSong = false;
                }
            }

            if(addSong && filters.likes) {
                if (song.likes < filters.likes) {
                    addSong = false;
                }
            }

            return addSong;
        });

        this.setState({
            filteredSongs: newFilteredSongs
        })
    }

    updateFilter = (tempState) => {
        this.filterSongs(tempState);
        this.setState({
            filterValues: tempState
        });
    }


    /************************************/
    /*              RENDER              */
    /************************************/
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
                        <FilterSongs songs={this.state.filteredSongs} updateFilters={this.updateFilter} />
                        <SongsTable songs={this.state.filteredSongs} updateSong={(song) => this.refreshSongs(this.editSong, song)} deleteSong={(song) => this.refreshSongs(this.deleteSong, song)} likeSong={(song) => this.refreshSongs(this.likeSong, song)} />
                    </div>
                    <div>
                        <Dashboard type="create" song="" submitAction={(song) => this.refreshSongs(this.createSong, song)} message="Create" />
                    </div>
                </div>
            )
        }
    }
}

export default App;