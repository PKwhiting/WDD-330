import HikesController from './hikesController.js';
const myHikesController = new HikesController('hikes');
window.addEventListener('load', () => {
  myHikesController.showHikeList();
});