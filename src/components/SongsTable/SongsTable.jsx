import React from 'react';
import Song from '../Song/Song';

function SongsTable(props) {
    const songDetails = props.songs.map((song) => {
        //debugger;
        return <Song song={song} updateSong={props.updateSong} deleteSong={props.deleteSong} />
    })
    return (
        <table class="col-sm-12 table table-striped me-4">
            <thead>
                <tr class="table-dark">
                    <th class="col-sm-2">Title</th>
                    <th class="col-sm-2">Artist</th>
                    <th class="col-sm-2">Album</th>
                    <th class="col-sm-2">Genre</th>
                    <th class="col-sm-1">Release Date</th>
                    <th class="col-sm-1">Likes</th>
                    <th class="col-sm-1"></th>
                    <th class="col-sm-1"></th>
                </tr>
            </thead>
            <tbody>
                {songDetails}
            </tbody>
        </table>
    );
}


export default SongsTable;