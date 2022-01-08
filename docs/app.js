const side = document.querySelector('.side');
const creamGroup = document.querySelector('.creams');
const cream = document.querySelector('.cream');
const creamTop = document.querySelector('.cream-top');

let sideArr = [];
let creamTopArr = [];
let creamGroupArr = [];

// size
let creamD = 160

function makingCake(num, array, name, degNum, width) {
  for (let i = 0; i < num; i++){
    let list = document.createElement('li');
    array.push(list);
    name.appendChild(list);
  }
  
  for (let i = 0; i < num; i++){
    let deg = i * degNum;
    let tanZ = width / Math.tan(degNum * Math.PI / 180);
    array[i].style.transform = `rotateY(${deg}deg) translateZ(${tanZ}px)`
  }
}


function makingCream() {
  makingCake(6, creamTopArr, creamTop, 60, 30);

  let count = 5;
  creamGroupArr.push(cream);
  
  for (let i = 0; i < count; i++){
    let createCream = cream.cloneNode(true);
    creamGroup.appendChild(createCream);
    creamGroupArr.push(createCream);
    console.log(creamGroupArr);
  }
  
  for (let i = 0; i <= count; i++){
    let deg = i * 60;
    creamGroupArr[i].style.transform = `rotateY(${deg}deg) translateZ(${creamD}px)`
  }
}

function init() {
  makingCake(60, sideArr, side, 6, 21);
  makingCream();
}

init()
