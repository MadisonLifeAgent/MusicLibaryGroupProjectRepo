import React from 'react';
import Song from '../Song/Song';

function SongsTable(props) {
    const songDetail = props.songDetail;
    const songDetails = songDetail.map((song) => {
        return <Song song={song} />
    })
    return (
        <table>
        <tr>
            <th>Title</th>
            <th>Artis</th>
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