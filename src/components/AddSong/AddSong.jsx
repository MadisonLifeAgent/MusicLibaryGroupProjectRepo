import React from 'react';

class AddSong extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            title: '',
            artist: '',
            album: '',
            release_date: '',
            genre: '',
            likes: 0,
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        //event.preventDefault();
        this.props.createSong(this.state);
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            title: null,
            artist: null,
            album: null,
            release_date: null,
            genre: null,
            likes: 0,
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>Song Title:</label>
                    <input name="title" type="text" value={this.state.title || ""} onChange={this.handleChange} />
                <label>Artist:</label>
                    <input name="artist" type="text" value={this.state.artist || ""} onChange={this.handleChange} />
                <label>Album:</label>
                    <input name="album" type="text" value={this.state.album || ""} onChange={this.handleChange} />
                <label>Release Date:</label>
                    <input name="release_date" type="date" value={this.state.release_date || ""} onChange={this.handleChange} />
                <label>Genre:</label>
                    <input name="genre" type="text" value={this.state.genre || ""} onChange={this.handleChange} />
                <button type="submit" value="Submit">Add New Song</button>
        </form>
        );
    }
}

export default AddSong;