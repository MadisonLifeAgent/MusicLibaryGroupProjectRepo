import React from 'react';



// Start with a blank form
// User types in data, which updates state
// On submit, send data to back end and refresh data
// Will need to update id if done manually

class EditSongModal extends React.Component {
    constructor(props){
        super(props);

        let showHideClassName = props.show ? "modal display-block" : "modal display-none";
        this.hideModalOuter = props.hideModal;
        this.submitAction = props.submitAction;

        this.state = {
            title: props.song.title,
            artist: props.song.artist,
            album: props.song.album,
            release_date: props.song.release_date,
            genre: props.song.genre,
            likes: props.song.likes,
            id: props.song.id
        }
    }

    hideModal = () => {
        this.hideModalOuter();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.submitAction();
        this.hideModal();
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
            <div className={this.props.show ? "modal display-block" : "modal display-none"} >
                <section className="modal-main" >
                    <form color="white" onSubmit={() => {console.log("submitted form")}}>
                        <div class="mb-3">
                            <label for="title" class="form-label">Song Title:</label>
                            <input name="title" type="text" value={this.state.title || ""} onChange={this.handleChange} />
                        </div>    
                        <div class="mb-3">
                            <label for="artist" class="form-label">Artist:</label>
                            <input name="artist" type="text" value={this.state.artist || ""} onChange={this.handleChange} />
                        </div>    
                        <div class="mb-3">
                            <label for="album" class="form-label">Album:</label>
                            <input name="album" type="text" value={this.state.album || ""} onChange={this.handleChange} />
                        </div>    
                        <div class="mb-3">
                            <label for="release_date" class="form-label">Release Date:</label>
                            <input name="release_date" type="date" value={this.state.release_date || ""} onChange={this.handleChange} />
                        </div>    
                        <div class="mb-3">
                            <label for="genre" class="form-label">Genre:</label>
                            <input name="genre" type="text" value={this.state.genre || ""} onChange={this.handleChange} />
                        </div>
                    </form>
                    <button class="btn btn-secondary" onClick={this.hideModal}>Cancel</button>
                    <button class="btn btn-primary" onClick={this.handleSubmit}>Submit Changes</button>
                </section>
            </div>
        );
    }
}

export default EditSongModal;