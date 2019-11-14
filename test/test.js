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
        var aResultAfterRotating = await startRotating(aMockArray, 1);
        var expectedResult = [
            [8, 4, 2, 1],
            [2, 6, 2, 1],
            [5, 1, 4, 3],
            [7, 8, 7, 6]
        ];
        assert.equal(equal(aResultAfterRotating, expectedResult), true);
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
