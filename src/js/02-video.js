import Player from '@vimeo/player';
import _ from 'lodash';
import throttle from 'lodash.throttle';


const storage = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Vimeo.Player(iframe);

player.on('timeupdate', _.throttle(function (data) {
    localStorage.setItem(storage, data.seconds);
}, 1000),
);

const saveTime = JSON.parse(localStorage.getItem(storage));

if (saveTime !== null) {
    player.setCurrentTime(saveTime);
};

 player.on('play', player.on);
