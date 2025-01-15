// CommonJS 모듈
// const moduleData = require("./math");
// ES모듈
// import {add, sub} from "./math.js";


// commonJS 모듈
// console.log(moduleData.add(1,2));
// console.log(moduleData.sub(1,2));

// ES모듈
// console.log(add(1,2));
// console.log(sub(1,2));
import randomcolor from "randomcolor";

const color = randomcolor();
const sec = document.querySelector(".section");

sec.style.backgroundColor = color;

console.log(color);