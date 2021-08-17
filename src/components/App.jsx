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
        this.getSongs();
    }

    /******************************************/
    /*     API CALLS AND HELPERS              */
    /******************************************/

    async getSongs() {
        try{
            let response = await axios.get("http://127.0.0.1:8000/songs/");
            this.setState({
                songs: response.data,
                filteredSongs: response.data
            })
            this.filterSongs()
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


    /************************************/
    /*          FILTERING               */
    /************************************/
    filterSongs = (tempState) => {
        let filters = tempState;
        let newFilteredSongs = this.state.songs.filter( (song) => {
            let addSong = true;

            if(filters.title) {
                if (!song.title.includes(filters.title)) {
                    addSong = false;
                }
            } 
            
            if(addSong && filters.artist) {
                if (!song.artist.includes(filters.artist)) {
                    addSong = false;
                }
            } 
            
            if(addSong && filters.album) {
                if (!song.album.includes(filters.album)) {
                    addSong = false;
                }
            } 
            
            if(addSong && filters.genre) {
                if (!song.genre.includes(filters.genre)) {
                    addSong = false;
                }
            } 
            
            if(addSong && filters.releaseDate) {
                if (!(song.release_date === filters.releaseDate)) {
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
                        <SongsTable songs={this.state.filteredSongs} updateSong={this.editSong} deleteSong={this.deleteSong} />
                    </div>
                    <div>
                        <Dashboard type="create" song="" submitAction={this.createSong} message="Create" />
                    </div>
                </div>
            )
        }
    }
}

export default App;