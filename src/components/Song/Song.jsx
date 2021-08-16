import React from 'react';
import EditSong from '../EditSong/EditSong';
import Dashboard from '../Dashboard/Dashboard';
import DeleteSong from '../DeleteSong/DeleteSong'

const Song = (props) => {
    return (
        <tr>
            <td>{props.song.title}</td>
            <td>{props.song.artist}</td>
            <td>{props.song.album}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.release_date}</td>
            <td>{props.song.likes}</td>
            <td><Dashboard contents={<EditSong song={props.song} updateSong={props.updateSong} />} message="Edit" /></td>
            <td><Dashboard contents={<DeleteSong deleteSong={ () => props.deleteSong(props.song)} />} message="Delete"/></td>
        </tr>
    );
}

export default Song;