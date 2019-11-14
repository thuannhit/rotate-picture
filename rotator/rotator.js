//Note: It couldn't be used ARROW Function inside of Object properties because of the difference from the 'this' context

let rotate = (A, iTimes) => {
    iTimes = iTimes % 4;
    if (iTimes === 0) {
        return A;
    } else {
        let B = initArrayB(A),
            size = A.length;
        for (let i = 0; i < size; i++) {
            for (let j = 0; j < size; j++) {
                B[j][size - i - 1] = A[i][j];
            }
        }
        return rotate(B, iTimes - 1);
    }
};
let startRotating = async (picture, iTimes) => {
    // A: is the picture
    // iTimes: number of time to rotate.
    if (!Array.isArray(picture) || !Number.isInteger(iTimes)) {
        return "";
    }

    let aPicture = picture;
    console.log("Picture before rotating: ");
    logTable(aPicture);
    console.log(`Picture after rotating ${iTimes} times: `);
    aPicture = await rotate(aPicture, iTimes);
    logTable(aPicture);
    return aPicture

};
let logTable = (A) => {
    for (let i = 0; i < A.length; i++) {
        console.log(A[i] + " ");
    }
};
let initArrayB = (A) => {
    let size = A.length,
        B = [];
    for (let i = 0; i < size; i++) {
        let aRow = new Array(size).fill(null);
        B.push(aRow);
    }
    return B
};

export { startRotating };