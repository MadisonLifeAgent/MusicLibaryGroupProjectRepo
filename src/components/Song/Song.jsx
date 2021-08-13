import React from 'react';
import EditSong from '../EditSong/EditSong';
import Dashboard from '../Dashboard/Dashboard';

const Song = (props) => {
    return (
        <tr>
            <td>{props.song.title}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.album}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.release_date}</td>
            <td>{props.song.likes}</td>
            <td><Dashboard contents={<EditSong editSong={props.editSong[props.song]} />} message="Edit Song" /></td>
        </tr>
    )
}

export default Song;