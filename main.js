const players = {};

function onYouTubeIframeAPIReady() {
    players["player1"] = new YT.Player("player1");
    players["player2"] = new YT.Player("player2");
}

const tag = document.createElement("script");
tag.src = "https://www.youtube.com/iframe_api";
const firstScriptTag = document.getElementsByTagName("script")[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

document.getElementById("nextBtn").addEventListener("click", () => {
    const activeIframe = document.querySelector(".slide.active iframe");

    if (activeIframe) {
        const iframeId = activeIframe.id;

        if (
            players[iframeId] &&
            typeof players[iframeId].pauseVideo === "function"
        ) {
            players[iframeId].pauseVideo();
        }
    }
});
