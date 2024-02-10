function renderPlaylist(anyPlaylist) {
    const playlistHTML = `<div class="playlist">
<h2 class="playlist-title">Education Videos</h2>
<div class="slider">
    <div class="slide">
        <video class="slide-video" controls>
            <source src="" type="video/mp4" />
        </video>

        <a href="">
            <p class="description-link">
                JavaScript - Way of the Samurai, Browser,
                first program, foreign language learning
                simulator
            </p>
        </a>

        <a href="">
            <span class="link-channel">${anyPlaylist.b}</span>
        </a>
        <span class="video-published">1 week ago</span>
    </div>
    <div class="slide">
        <video class="slide-video" controls>
            <source src="" type="video/mp4" />
        </video>

        <a href="">
            <p class="description-link">
                JavaScript - The Way of the Samurai,
                installing VS code, code editor
            </p>
        </a>

        <a href="">
            <span class="link-channel">It-Kamasutra</span>
        </a>
        <span class="video-published">1 week ago</span>
    </div>
    <div class="slide">
        <video class="slide-video" controls>
            <source src="" type="video/mp4" />
        </video>

        <a href="">
            <p class="description-link">
                Reboot - express + typescript + nodemon /
                Back-end - The Samurai Way It-Kamasutra
            </p>
        </a>

        <a href="">
            <span class="link-channel">It-Kamasutra</span>
        </a>
        <span class="video-published">1 week ago</span>
    </div>
</div>
</div>`;

    section.innerHTML += playlistHTML;
}