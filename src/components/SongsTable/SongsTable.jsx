import React from 'react';
import Song from '../Song/Song';
import './SongsTable.css';

function SongsTable(props) {
    const songDetails = props.songs.map((song) => {
        //debugger;
        return <Song song={song} updateSong={props.updateSong} deleteSong={props.deleteSong} />
    })
    return (
        <table class="container-fluid col-sm-10 table table-striped table-hover table-sm" id="table-padding">
            <thead>
                <tr id="table-header">
                    <th class="col-sm-2">Title</th>
                    <th class="col-sm-2">Artist</th>
                    <th class="col-sm-2">Album</th>
                    <th class="col-sm-2">Genre</th>
                    <th class="col-sm-2">Release Date</th>
                    <th class="col-sm-1">Likes</th>
                </tr>
            </thead>
            <tbody>
                {songDetails}
            </tbody>
        </table>
    );
}


export default SongsTable;