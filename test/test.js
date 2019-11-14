import assert from 'assert';
import equal from 'deep-equal';
import { startRotating } from '../rotator/rotator.js';

describe('# It is testing the startRotating module', function () {
    it("Testing the startRotating function", async function () {
        var aMockArray = [
            [1, 1, 3, 6],
            [2, 2, 4, 7],
            [4, 6, 1, 8],
            [8, 2, 5, 7]
        ];
        var aResultAfterRotating1Times = await startRotating(aMockArray, 1);
        var aResultAfterRotating2Times = await startRotating(aMockArray, 2);
        var aResultAfterRotating3Times = await startRotating(aMockArray, 3);
        var aResultAfterRotating4Times = await startRotating(aMockArray, 4);
        var expectedResult1Time = [
            [8, 4, 2, 1],
            [2, 6, 2, 1],
            [5, 1, 4, 3],
            [7, 8, 7, 6]
        ];
        var expectedResult2Times = [
            [7, 5, 2, 8],
            [8, 1, 6, 4],
            [7, 4, 2, 2],
            [6, 3, 1, 1]
        ];
        var expectedResult3Times = [
            [6, 7, 8, 7],
            [3, 4, 1, 5],
            [1, 2, 6, 2],
            [1, 2, 4, 8]
        ];
        var expectedResult4Time4 = [
            [1, 1, 3, 6],
            [2, 2, 4, 7],
            [4, 6, 1, 8],
            [8, 2, 5, 7]
        ];
        assert.equal(equal(aResultAfterRotating1Times, expectedResult1Time), true, 'Rotate 1 times runs ok');
        assert.equal(equal(aResultAfterRotating2Times, expectedResult2Times), true, 'Rotate 2 times runs ok');
        assert.equal(equal(aResultAfterRotating3Times, expectedResult3Times), true, 'Rotate 3 times runs ok');
        assert.equal(equal(aResultAfterRotating4Times, expectedResult4Time4), true, 'Rotate 4 times runs ok');
    });
    it("Testing the startRotating function if the input data is not valid", async function () {
        var aMockArray = [
            "test invalid array",
            [2, 2]
        ];
        var aResultAfterRotating = await startRotating(aMockArray, 2);
        assert.equal(aResultAfterRotating, undefined);
    });
});
