import React from 'react';
import EditSong from '../EditSong/EditSong';
import Dashboard from '../Dashboard/Dashboard';
import DeleteSong from '../DeleteSong/DeleteSong'

const Song = (props) => {
    return (
        <tr class="p-2">
            <td>
                {props.song.title}
                <Dashboard contents={<EditSong song={props.song} updateSong={props.updateSong} />} message="Edit" />
                <Dashboard contents={<DeleteSong deleteSong={ () => props.deleteSong(props.song)} />} message="Delete"/>
            </td>
            <td>{props.song.artist}</td>
            <td>{props.song.album}</td>
            <td>{props.song.genre}</td>
            <td>{props.song.release_date}</td>
            <td>{props.song.likes}</td>

        </tr>
        
    );
}

export default Song;