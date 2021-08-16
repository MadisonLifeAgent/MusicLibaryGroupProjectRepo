import React from 'react';

const DeleteSong = (props) => {
    return (
    <div>
        <p>Song Title: {props.title}</p>
        <p>Artist: {props.artist}</p>
        <p>Album: {props.album}</p>
        <p>Release Date: {props.release_date}</p>
        <p>Genre: {props.genre}</p>
        <button onClick={() => {props.deleteSong(props.song)} }>Delete Song</button>
    </div>
    );
}


export default DeleteSong;