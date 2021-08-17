import React from 'react';
import Song from '../Song/Song';
import './SongsTable.css';

function SongsTable(props) {
    const songDetails = props.songs.map((song) => {
        //debugger;
        return <Song song={song} updateSong={props.updateSong} deleteSong={props.deleteSong} likeSong={props.likeSong} />
    })
    return (
        <div class="table-responsive">
            <table class="container-fluid table table-striped table-hover table-sm" id="table-default">
                <thead>
                    <tr id="table-header">
                        <th id="font-color">Title</th>
                        <th id="font-color">Artist</th>
                        <th id="font-color">Album</th>
                        <th id="font-color">Genre</th>
                        <th id="font-color">Release Date</th>
                        <th id="font-color">Likes</th>
                        <th id="font-color"></th>
                    </tr>
                </thead>
                <tbody>
                    {songDetails}
                </tbody>
            </table>
        </div>
    );
}


export default SongsTable;