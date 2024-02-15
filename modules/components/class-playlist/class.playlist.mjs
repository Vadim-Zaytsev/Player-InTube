export class Playlist {
    constructor(namePlaylist, linkPlaylist, video) {
        this.namePlaylist = namePlaylist;
        this.linkPlaylist = linkPlaylist;
        this.video = video;
        this.id = `${this.createId()}${++Playlist.playlistCounter}`;
    }

    createId() {
        return `PL${this.namePlaylist
            .split(' ')
            .map((el) => el[0])
            .join('')}`;
    }

    static playlistCounter = 0;
}
