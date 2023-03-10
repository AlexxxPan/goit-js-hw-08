import Player from '@vimeo/player';
import throttle from 'lodash.throttle';
const STORAGE_KEY = 'videoplayer-current-time';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('loaded', () => {
  const currentTime = localStorage.getItem(STORAGE_KEY) || 0;
  player.setCurrentTime(currentTime);
});

player.on(
  'timeupdate',
  throttle(t => {
    localStorage.setItem(STORAGE_KEY, t.seconds);
  }, 1000) 
);