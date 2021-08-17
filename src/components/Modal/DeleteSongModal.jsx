import React from 'react';

const DeleteSongModal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    const close = props.hideModal;
    const submitAction = () => {
        props.submitAction(props.song);
        props.hideModal();
    }

    return (
        <div className={showHideClassName} color="white">
            <section className="modal-main">
                <div class="m-3" >
                    <p>Song Title: {props.song.title}</p>
                    <p>Artist: {props.song.artist}</p>
                    <p>Album: {props.song.album}</p>
                    <p>Release Date: {props.song.release_date}</p>
                    <p>Genre: {props.song.genre}</p>
                    <button class="btn btn-primary kbc-button kbc-button-sm" onClick={close} >Cancel</button>
                    <button onClick={submitAction} class="kbc-button kbc-button-sm">Delete Song</button>
                </div>
            </section>
        </div>
    );
}

export default DeleteSongModal;