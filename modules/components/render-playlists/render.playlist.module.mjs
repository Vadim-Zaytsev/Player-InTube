export function renderPlaylist(anyPlaylist) {
    const section = document.querySelector('.section');

    const playlistHTML = `<div class="playlist">
    <a href="${anyPlaylist.linkPlaylist}" target="_blank">
    <h2 class="playlist-title">${anyPlaylist.namePlaylist}</h2>
    </a>

<div class="slider">
    <div class="slide">
        <video class="slide-video" controls poster="${anyPlaylist.video[0].posterUrl}">
            <source src="${anyPlaylist.video[0].url}" type="video/mp4" />
        </video>

        <a href="${anyPlaylist.video[0].url}">
            <p class="description-link">
                ${anyPlaylist.video[0].description}
            </p>
        </a>

        <a href="https://www.youtube.com/@ITKAMASUTRA" target="_blank">
            <span class="link-channel">${anyPlaylist.video[0].channelName}</span>
        </a>
        <span class="video-published">${anyPlaylist.video[0].publicationDate}</span>
    </div>
    <div class="slide">
        <video class="slide-video" controls poster="${anyPlaylist.video[1].posterUrl}">
            <source src="${anyPlaylist.video[1].url}" type="video/mp4" />
        </video>

        <a href="${anyPlaylist.video[1].url}">
            <p class="description-link">
            ${anyPlaylist.video[1].description}
            </p>
        </a>

        <a href="https://www.youtube.com/@ITKAMASUTRA" target="_blank">
            <span class="link-channel">${anyPlaylist.video[1].channelName}</span>
        </a>
        <span class="video-published">${anyPlaylist.video[1].publicationDate}</span>
    </div>
    <div class="slide">
        <video class="slide-video" controls poster="${anyPlaylist.video[2].posterUrl}">
            <source src="${anyPlaylist.video[2].url}" type="video/mp4" />
        </video>

        <a href="${anyPlaylist.video[2].url}">
            <p class="description-link">
            ${anyPlaylist.video[2].description}
            </p>
        </a>

        <a href="https://www.youtube.com/@ITKAMASUTRA" target="_blank">
            <span class="link-channel">It-Kamasutra</span>
        </a>
        <span class="video-published">${anyPlaylist.video[2].publicationDate}</span>
    </div>
</div>
</div>`;

    section.innerHTML += playlistHTML;
}
