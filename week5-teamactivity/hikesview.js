const imgBasePath = '//byui-cit.github.io/cit261/examples/';

class HikesView {
  renderHikeList(hikeListElement, hikeList) {
    hikeListElement.innerHTML = '';
    hikeList.forEach(hike => {
     hikeListElement.appendChild(this.renderOneHikeLight(hike));
    });
  }
  renderOneHikeLight(hike) {
    const item = document.createElement('li');
    item.classList.add('light');
   item.setAttribute('data-name', hike.name);
    item.innerHTML = ` <div><h2>${hike.name}</h2>
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${
      hike.imgAlt
    }"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
    </div></div>`;

    return item;
  }
  renderOneHikeFull(parent, hike) {
    const backButton = document.createElement('button');
    backButton.innerHTML = '&lt;- All Hikes';
    const item = document.createElement('li');
    item.innerHTML = ` 
        
            <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
            <h2>${hike.name}</h2>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
            <div>
        
        `;
    parent.innerHTML = '';
    item.insertBefore(backButton, item.childNodes[0]);
    parent.appendChild(item);
return backButton;
  }
}
export default HikesView;