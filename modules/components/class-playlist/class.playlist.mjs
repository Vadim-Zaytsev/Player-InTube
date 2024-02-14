export class Playlist {
    constructor(namePlaylist, linkPlaylist, video) {
        this.namePlaylist = namePlaylist;
        this.linkPlaylist = linkPlaylist;
        this.video = video;
        this.id = this.createId();
    }

    createId() {
        return Math.floor(Math.random() * 1000000) + 1;
    }
}
