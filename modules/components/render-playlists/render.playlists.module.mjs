import { renderPlaylist } from './render.playlist.module.mjs';

export function renderPlaylists(arrPlaylists) {
    for (let i = 0; i < arrPlaylists.length; i++) {
        renderPlaylist(arrPlaylists[i]);
    }
}


