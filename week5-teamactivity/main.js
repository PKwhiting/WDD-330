const hikeList = [
    {
      name: 'Bechler Falls',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',

      },
    {
      name: 'Teton Canyon',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',

      },
    {
      name: 'Denanda Falls',
      imgSrc: 'falls.jpg',
      imgAlt: 'Image of Bechler Falls',
      distance: '3 miles',
      difficulty: 'Easy',

      }
  ];
  class HikeModel {
    getAllHikes() {
      return hikeList;
    }
  
    getHikeByName(name) {
      return hikeList.find(hike => hike.name === name);
    }
  }
  
  export default HikeModel;