// import { sayHello } from 'say_hello.js';
// var rotator = require('./rotator/rotator.js');

import { startRotating } from './rotator/rotator.js';
let picture = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 6, 2, 4, 5, 7, 1, 4, 7, 1],
    [3, 4, 5, 3, 5, 5, 2, 6, 5, 5],
    [1, 5, 6, 7, 7, 9, 5, 1, 7, 4],
    [6, 6, 1, 6, 8, 8, 9, 9, 1, 9],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2]
],
    iTimes = 13;
//  This is just for testing on how to use the module exported
let rotateAPicture = (picture, iTimes) => {
    console.log("Picture before rotating:");
    console.log(picture);
    console.log(`Picture after rotating ${iTimes}: `)
    let newPicture = startRotating(picture, iTimes);
    console.log(newPicture);
}

rotateAPicture(picture, iTimes)