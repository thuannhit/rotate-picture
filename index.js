var fs = require('fs'),
    filename = process.argv[2];

// fs.readFile(filename, 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log('OK: ' + filename);
//     console.log(data)
// });
var A = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    [9, 6, 2, 4, 5, 7, 1, 4, 7, 1],
    [3, 4, 5, 3, 5, 5, 2, 6, 5, 5],
    [1, 5, 6, 7, 7, 9, 5, 1, 7, 4],
    [6, 6, 1, 6, 8, 8, 9, 9, 1, 9],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],
    [1, 5, 3, 4, 8, 3, 8, 3, 8, 2],

],
    iTimes = 2;

var logTable = (A) => {
    for (var i = 0; i < A.length; i++) {
        console.log(A[i] + " ");
    }
}
var initArrayB = (A) => {
    var size = A.length,
        B = [];
    for (var i = 0; i < size; i++) {
        var aRow = new Array(size).fill(1);
        B.push(aRow);
    }
    return B
}

var solution = async(A, iTimes) => {
    // A: is the picture
    // iTimes: number of time to rotate.
    // solution(A, iTimes);
    console.log("Picture before: ");
    logTable(A);
    console.log("Picture after: ");
    A = await rotate(A, iTimes);
    logTable(A);

}

var rotate = (A, iTimes)=>{
    var iTimes = iTimes % 4;
    if (iTimes === 0) {
        return A;
    } else {
        var B = initArrayB(A);
        // console.log("itime: " + iTimes);
        // console.log("It is rotating: ");
        var size = A.length;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                B[j][size - i - 1] = A[i][j];
            }
        }
        return rotate(B, iTimes - 1);
        // In this step, we can use this way or just by looping max 3 times. :) Ez game.
    }
    
}

solution(A, iTimes);