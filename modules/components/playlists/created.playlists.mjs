import { Playlist } from '../class-playlist/class.playlist.mjs';
import { videosArr } from '../videos/created.videos.mjs';
import { videosArrBack } from '../videos/created.videos.mjs';

const jsWaySamurai = new Playlist(
    'JS Путь самурая',
    'https://www.youtube.com/playlist?list=PLcvhF2Wqh7DMufolk_eudZOuchfsG2hRT',
    videosArr
);

const backEndWaySamurai = new Playlist(
    'Back-end Путь Самурая',
    'https://www.youtube.com/playlist?list=PLcvhF2Wqh7DP4tZ851CauQ8GqgqlCocjk',
    videosArrBack
);
// backEndWaySamurai

export const arrPlaylists = [jsWaySamurai, backEndWaySamurai];
