import React from 'react';

const Song = (props) => {
    return (
        <tr>
            <td>{props.song.title}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.album}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.release_date}</td>
            <td>{props.song.likes}</td>
        </tr>
    )
}

export default Song;