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
        this.resetForm();
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.submitAction(this.state);
        this.hideModal();
        this.resetForm();
    }

    resetForm = () => {
        this.setState({
            title: this.props.song.title,
            artist: this.props.song.artist,
            album: this.props.song.album,
            release_date: this.props.song.release_date,
            genre: this.props.song.genre,
            likes: this.props.song.likes,
            id: this.props.song.id
        })
    }

    render() {
        return (
            <div className={this.props.show ? "modal display-block" : "modal display-none"} >
                <section className="modal-main" >
                    <form color="white" onSubmit={() => {console.log("submitted form")}} class="m-3">
                        <div class="mb-3">
                            <label for="title" class="form-label">Song Title:</label>
                            <input id="title" name="title" class="form-control" type="text" value={this.state.title || ""} onChange={this.handleChange} />
                        </div>    
                        <div class="mb-3">
                            <label for="artist" class="form-label">Artist:</label>
                            <input id="artist" name="artist" class="form-control" type="text" value={this.state.artist || ""} onChange={this.handleChange} />
                        </div>    
                        <div class="mb-3">
                            <label for="album" class="form-label">Album:</label>
                            <input id="album" name="album" class="form-control" type="text" value={this.state.album || ""} onChange={this.handleChange} />
                        </div>    
                        <div class="mb-3">
                            <label for="release_date" class="form-label">Release Date:</label>
                            <input id="release_date" name="release_date" class="form-control" type="date" value={this.state.release_date || ""} onChange={this.handleChange} />
                        </div>    
                        <div class="mb-3">
                            <label for="genre" class="form-label">Genre:</label>
                            <input id="genre" name="genre" class="form-control" type="text" value={this.state.genre || ""} onChange={this.handleChange} />
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