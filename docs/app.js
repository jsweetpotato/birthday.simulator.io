class App {
  constructor() {
    const cake = document.querySelector('#cake');
    this.cake = cake;

    const creamTop = document.querySelector('.cream-top');
    

    const FLAVORS = ["chocolate", "vanila", "green", "sweetptt", "cheese"];
    this.FLAVORS = FLAVORS;
    
    this.makingCakeSide(45, 8, 35);
    this.changeFlavor();
    this.Cream();
    
  }
  
  makingCakeSide(count, degNum, width) {
    const side = document.querySelector('.side');
    let sideArr = [];

    for (let i = 0; i < count; i++) {
      let list = document.createElement('li');
      sideArr.push(list);
      side.appendChild(list);
    }

    for (let i = 0; i < count; i++) {
      let deg = i * degNum;
      let transZ = width / Math.tan(degNum * Math.PI / 180);
      sideArr[i].style.transform = `rotateY(${deg}deg) translateZ(${transZ}px)`
    }
  }

  changeFlavor() {
    const flavors = [...document.querySelectorAll(".color-buttons button")];
    flavors.forEach(e => e.addEventListener("click", () => {
      console.dir(e);
      if (document.querySelector(".color-buttons .select")) {
        document.querySelector(".color-buttons .select").classList.remove("select");
      }
      e.classList.add("select");
      this.cake.classList.remove(...this.FLAVORS);
      this.cake.classList.add(this.FLAVORS[e.outerText]);
    }))
  }

  Cream() {
    const creams = document.querySelector(".creams");
    const cream = document.querySelector(".cream");
    const creamTop = document.querySelector(".cream-top");
    const creamBottom = document.querySelector(".cream-bottom");
    this.creams = creams;
    this.cream = cream;
    this.creamTop = creamTop;
    this.creamBottom = creamBottom;
    
    
    let creamTopArr = [];
    let creamBottomArr = [];
    let creamGroupArr = [];
    this.creamTopArr = creamTopArr;
    this.creamBottomArr = creamBottomArr;
    this.creamGroupArr = creamGroupArr;

    
    for (let i = 0; i < 10; i++){
      let creamT = document.createElement('li');
      let creamB = document.createElement('li');
      creamTopArr.push(creamT);
      creamBottomArr.push(creamB);
      creamTop.appendChild(creamT);
      creamBottom.appendChild(creamB);
    }

    console.log(creamGroupArr);
    
    this.setCreamSize();
    this.setCreamCount();
  }

  setCreamSize() {
    const sizeRange = document.querySelector(".cream-size .size");
    const setting = {
      width: [12, 14, 16, 18, 20],
      topHeight: [24, 28, 32, 36, 40],
      bottomHeight: [10, 12, 14, 16, 18],
      creamTopTransY: [-23.8, -27.8, -31.8, -35.8, -39.8],
      creamTransY: [-70, -72, -75, -77, -78],
      degX: [48, 50, 49, 50, 49]
    }

    let transZ = Math.floor((setting.width[2]/2) / (Math.tan(Math.PI / 180 * 18)));
    this.transZ = transZ;

    let size = 3;

    for (let i = 0; i < 10; i++){
      let deg = i * 36;
      this.creamTopArr[i].style.transform = `rotateY(${deg}deg) translateZ(${this.transZ}px) rotateX(49deg)`;
      this.creamBottomArr[i].style.transform = `rotateY(${deg}deg) translateZ(${this.transZ}px)`;
    }

    this.creamTop.style.transform = `translateY(${setting.creamTopTransY[2]}px)`;

    sizeRange.addEventListener("change", () => {
      size = sizeRange.value; 

      this.transZ = Math.round((setting.width[size] / 2) / (Math.tan(Math.PI / 180 * 18)));    

      for (let i = 0; i <= this.count; i++){
        for (let j = 0; j < 10; j++){
          let deg = j * 36;  
          this.groupT[i][j].style.width = `${setting.width[size]}px`;
          this.groupT[i][j].style.height = `${setting.topHeight[size]}px`;
          this.groupT[i][j].style.transform = `rotateY(${deg}deg) translateZ(${this.transZ - 1}px) rotateX(${setting.degX[size]}deg)`;
          this.groupB[i][j].style.width = `${setting.width[size]}px`;
          this.groupB[i][j].style.height = `${setting.bottomHeight[size]}px`;
          this.groupB[i][j].style.transform = `rotateY(${deg}deg) translateZ(${this.transZ - 1}px)`;
        }
        this.creamT[i][0].style.transform = `translateY(${setting.creamTopTransY[size]}px)`;
      }

      this.creams.style.transform = `translateY(${setting.creamTransY[size]}px)`;

    })
    
  }
  
  setCreamCount() {
    const creamGroup = document.querySelector('.creams');
    const countRange = document.querySelector(".cream-count .count");

    this.creamGroupArr.push(this.cream);

    let count = 8;
    this.count = count;
    
    for (let i = 0; i < count; i++){
      let creamClone = this.cream.cloneNode(true);
      creamGroup.appendChild(creamClone);
      this.creamGroupArr.push(creamClone);
    }
    
    const styleSet = (count) => {
      for (let i = 0; i <= count; i++) {
        let deg = i * (360 / this.creamGroupArr.length);
        this.creamGroupArr[i].style.transform = `rotateY(${deg}deg) translateZ(${250 - 24*2}px)`;
      }
    };
    this.styleSet = styleSet;

    
    let groupT = [];
    let groupB = [];
    let creamT = [];
    this.groupT = groupT;
    this.groupB = groupB;
    this.creamT = creamT;

    for (let i = 0; i <= count; i++){
      groupT.push(this.creamGroupArr[i].querySelectorAll(".cream-top li"));
      groupB.push(this.creamGroupArr[i].querySelectorAll(".cream-bottom li"));
      creamT.push(this.creamGroupArr[i].querySelectorAll(".cream-top"));
    }


    styleSet(count);

    countRange.addEventListener("change", () => {
      let changedCount = countRange.value;

      const add = () => {
        for (let i = 0; i < (changedCount - count); i++) {
          let creamClone = this.cream.cloneNode(true);
          creamGroup.appendChild(creamClone);
          this.creamGroupArr.push(creamClone);
        }
        styleSet(changedCount);
      }

      const remove = () => {
        for (let i = 0; i < (count - changedCount); i++){
          creamGroup.removeChild(creamGroup.lastChild);
          this.creamGroupArr.pop();
        }
        styleSet(changedCount);
      }
      
      (changedCount - count) > 0 ? add() : (changedCount - count) < 0 ? remove() : console.log("same");

      count = changedCount;
      this.count = count;

      this.groupT = [];
      this.groupB = [];
      this.creamT = [];

      for (let i = 0; i <= count; i++){
        this.groupT.push(this.creamGroupArr[i].querySelectorAll(".cream-top li"));
        this.groupB.push(this.creamGroupArr[i].querySelectorAll(".cream-bottom li"));
        this.creamT.push(this.creamGroupArr[i].querySelectorAll(".cream-top"));
      }

    });
  }
}


window.onload = function () {
  new App();
}
