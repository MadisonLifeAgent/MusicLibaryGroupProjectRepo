import React from 'react';

const DeleteSongModal = (props) => {
    const showHideClassName = props.show ? "modal display-block" : "modal display-none";
    const close = props.hideModal;
    const submitAction = () => {
        props.submitAction();
        props.hideModal();
    }

    return (
        <div className={showHideClassName} color="white">
            <section className="modal-main" >
                <p>Song Title: {props.title}</p>
                <p>Artist: {props.artist}</p>
                <p>Album: {props.album}</p>
                <p>Release Date: {props.release_date}</p>
                <p>Genre: {props.genre}</p>
                <button onClick={submitAction}>Delete Song</button>
                <button class="btn btn-primary" onClick={close} >Cancel</button>
            </section>
        </div>
    );
}

export default DeleteSongModal;