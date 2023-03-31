import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframeEl = document.querySelector('#vimeo-player');
const player = new Player('vimeo-player', iframeEl);

player.on('timeupdate', throttle(saveStorage, 1000));

player.setCurrentTime(localStorage.getItem("videoplayer-current-time"))
    .catch(function (error) {
    switch (error.name) {
        case 'RangeError':
            break;
        default:
            break;
    }
});

function saveStorage(data) {
    localStorage.setItem("videoplayer-current-time", data.seconds)};