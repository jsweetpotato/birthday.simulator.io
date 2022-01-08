const side = document.querySelector('.side');
let sideElem = [];

function init() {
  for (let i = 0; i <= 60; i++){
    let list = document.createElement('li');
    list.classList.add(`side${i}`);
    sideElem.push(list);
    side.appendChild(list);
  }

  for (let i = 0; i <= 60; i++){
    let deg = i * 6;
    let transZ = 21/Math.tan(6 * Math.PI / 180);
    sideElem[i].style.transform = `rotateY(${deg}deg) translateZ(${transZ}px)`;
  }
}



init();