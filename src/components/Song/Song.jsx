import React from 'react';
import EditSong from '../EditSong/EditSong';
import Dashboard from '../Dashboard/Dashboard';
import DeleteSong from '../DeleteSong/DeleteSong';
import './Song.css';

const Song = (props) => {
    return (
        <tr class="p-2">
            <td>
                {props.song.title}
            </td>
            <td>{props.song.artist}</td>
            <td>{props.song.album}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.release_date}</td>
            <td>
                {props.song.likes}
                <Dashboard type="edit" song={props.song} submitAction={props.updateSong} message="Edit" />
                <Dashboard type="delete" song={props.song} submitAction={props.deleteSong} message="Delete" />
                <button onClick={() => props.likeSong(props.song)}>Like</button>
            </td>

        </tr>
        
    );
}

export default Song;