import React, { Component } from 'react';
import SongsTable from '../SongsTable/SongsTable'

class FilterSongs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            allSongs: props.songs,
            filteredSongs: props.songs,
            titleFilter: "",
            artistFilter: "",
            albumFilter: "",
            genreFilter: "",
            releaseFilter: "",
            likesFilter: 0
        }
        this.updateSong = props.updateSong;
        this.deleteSong = props.deleteSong;
    }

    handleChange = (event) => {
        let tempState = this.getTempState(event);
        let newFilteredSongs = this.refreshFilteredSongs(tempState);
        this.setState({
            [event.target.name]: event.target.value,
            filteredSongs: newFilteredSongs
        });
        //Songs where contents contain state values
        
    }

    getTempState = (event) => {
        let tempState = this.state;
        tempState[event.target.name] = event.target.value;
        return tempState;
    }

    refreshFilteredSongs = (temporaryState) => {
        let newFilteredSongs = temporaryState.allSongs.filter( (song) => {
            let addSong = true;

            if(temporaryState.titleFilter) {
                if (!song.title.includes(temporaryState.titleFilter)) {
                    addSong = false;
                }
            } 
            
            if(addSong && temporaryState.artistFilter) {
                if (!song.artist.includes(temporaryState.artistFilter)) {
                    addSong = false;
                }
            } 
            
            if(addSong && temporaryState.albumFilter) {
                if (!song.album.includes(temporaryState.albumFilter)) {
                    addSong = false;
                }
            } 
            
            if(addSong && temporaryState.genreFilter) {
                if (!song.genre.includes(temporaryState.genreFilter)) {
                    addSong = false;
                }
            } 
            
            if(addSong && temporaryState.releaseFilter) {
                if (!song.release_date === temporaryState.releaseFilter) {
                    addSong = false;
                }
            }

            return addSong;
        });

        return newFilteredSongs
    }


    render() {
        // Need to have a form, no submit, only inputs.
        return (
            <div class="col-sm-12">
                <h4 class="text-light mt-2 mb-2">Find Song(s)</h4>
                <form onSubmit={this.handleSubmit} class="align-items-center">
                    <input class="col-sm-2 mb-2 me-2 rounded" name="titleFilter" type="text" value={this.state.titleFilter} onChange={this.handleChange} placeholder="Song Title"/>
                    <input class="col-sm-2 mb-2 me-2 rounded" name="artistFilter" type="text" value={this.state.artistFilter} onChange={this.handleChange} placeholder="Artist" />
                    <input class="col-sm-2 mb-2 me-2 rounded" name="albumFilter" type="text" value={this.state.albumFilter} onChange={this.handleChange} placeholder="Album"/>
                    <input class="col-sm-2 mb-2 me-2 rounded" name="genreFilter" type="text" value={this.state.genreFilter} onChange={this.handleChange} placeholder="Genre" />
                    <input class="col-sm-2 mb-2 me-2 rounded" name="releaseFilter" type="date" value={this.state.release_dateFilter} onChange={this.handleChange} placeholder="Release Date" />

                </form>
                <SongsTable songs={this.state.filteredSongs} updateSong={this.updateSong} deleteSong={this.deleteSong} />
            </div>
        )
    }
}

export default FilterSongs;