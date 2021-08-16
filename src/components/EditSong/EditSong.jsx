import React from 'react';

class EditSong extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            id: props.song.id,
            title: props.song.title,
            artist: props.song.artist,
            album: props.song.album,
            release_date: props.song.release_date,
            genre: props.song.genre,
            likes: props.song.likes,
        }

        this.updateSong = (song) =>  {
            props.updateSong(song);
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        //event.preventDefault();
        console.log(this.state)
        this.updateSong(this.state);
        //this.resetForm();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Song Title:</label>
                    <input name="title" type="text" value={this.state.title || "song"} onChange={this.handleChange} />
                <label>Artist:</label>
                    <input name="artist" type="text" value={this.state.artist || ""} onChange={this.handleChange} />
                <label>Album:</label>
                    <input name="album" type="text" value={this.state.album || ""} onChange={this.handleChange} />
                <label>Release Date:</label>
                    <input name="release_date" type="date" value={this.state.release_date || ""} onChange={this.handleChange} />
                <label>Genre:</label>
                    <input name="genre" type="text" value={this.state.genre || ""} onChange={this.handleChange} />
                <button type="submit" value="Submit">Submit Changes</button>
        </form>
        );
    }
}

export default EditSong;