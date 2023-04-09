import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const VIDEO_CURRENT_TIME = 'videoplayer-current-time';

player.on('timeupdate', throttle(saveVideoTime, 1000));

function saveVideoTime(data) {
  const currentTime = data.seconds;
  localStorage.setItem(VIDEO_CURRENT_TIME, currentTime);
}

player
  .setCurrentTime(localStorage.getItem(VIDEO_CURRENT_TIME) || 0)
