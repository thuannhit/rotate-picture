import assert from 'assert';
import { startRotating } from '../rotator/rotator.js';

describe('# It is testing the startRotating module', function () {
    it("Testing the startRotating function", async function () {
            var aMockArray=[
                [1,1],
                [2,2]
            ];
        var aArrayB = await startRotating(aMockArray, 2);
            assert.equal(aArrayB[0][0], 2);
        });
    });
