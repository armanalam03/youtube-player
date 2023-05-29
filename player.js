const playPauseBtn = document.querySelector(".play_pause_btn");
const video = document.querySelector("video");
const videoContainer = document.querySelector(".video_container");

const theatreBtn = document.querySelector(".theatre_btn");
const fullScreenBtn = document.querySelector(".full_screen_btn");
const miniPlayerBtn = document.querySelector(".mini_player_btn");


document.addEventListener("keydown", e => {
    switch(e.key.toLowerCase()){
        case " ":
        case "k":
            togglePlay()
        break;
        case "f":
            toggleFullScreenMode()
        break;
        case "t":
            toggleTheatreMode()
        break;
    }
})
// document.addEventListener("keydown", e => {
//     switch(e.key.toLowerCase()){
//         case "f":
//             toggleFullScreenMode()
//         break;
//     }
// })

//Play Pause Controls

playPauseBtn.addEventListener('click', togglePlay);

video.addEventListener("click", togglePlay);

function togglePlay() {
    video.paused ? video.play() : video.pause();
}

video.addEventListener("play", () => {
    videoContainer.classList.remove("paused");
})
video.addEventListener("pause", () => {
    videoContainer.classList.add("paused");
})

//View Modes

theatreBtn.addEventListener("click", toggleTheatreMode);
fullScreenBtn.addEventListener("click", toggleFullScreenMode);
miniPlayerBtn.addEventListener("click", toggleMiniPlayerMode);

function toggleTheatreMode() {
    videoContainer.classList.toggle("theatre");
}

function toggleFullScreenMode() {
    if (document.fullscreenElement == null){
        videoContainer.requestFullscreen();
        videoContainer.classList.add("full_screen");
    }
    else{
        document.exitFullscreen();
        videoContainer.classList.remove("full_screen");
    }
}

function toggleMiniPlayerMode() {
    if(videoContainer.classList.contains("mini_player")){
        document.exitPictureInPicture();
        // videoContainer.classList.remove("mini_player");
    }
    else{
        document.requestPictureInPicture();
        // videoContainer.classList.add("mini_player");
    }
}