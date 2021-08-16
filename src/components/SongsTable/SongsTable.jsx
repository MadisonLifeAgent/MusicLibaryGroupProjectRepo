import React from 'react';
import Song from '../Song/Song';

function SongsTable(props) {
    const songDetails = props.songs.map((song) => {
        //debugger;
        return <Song song={song} updateSong={props.updateSong} deleteSong={props.deleteSong} />
    })
    return (
        <table>
        <tr>
            <th>Title</th>
            <th>Artist</th>
            <th>Album</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Likes</th>
        </tr>
        {songDetails}
        </table>
    );
}


export default SongsTable;