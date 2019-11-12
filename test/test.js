var assert = require('assert');
var rotator = require('../rotator/rotator');
var expect = require('chai').expect;

    describe('# It is testing the rotator module', function () {
        it("Testing the initArrayB function", function () {
            console.log(rotator);
            var aMockArray=[
                [1,1],
                [2,2]
            ];
            var aArrayB=rotator.initArrayB(aMockArray);
            assert.equal(aArrayB.length, 2);
        });
        it("Testing the readPictureFromFile function", function () {
            var iTimes=rotator.readPictureFromFile().iTimes;
            assert.equal(iTimes, 3);
        });
        it("Testing the logTable function", function () {
            var aMockArray = [
                [1, 1],
                [2, 2]
            ];
            var result = rotator.logTable(aMockArray);
            assert.ok(rotator, "rotator.logTable ran well");
        });
        it("Testing the start function", function () {
            var result = rotator.start();
            assert.ok(result, "rotator.start ran well");
        });
        it("Testing the rotate function", function () {
            var aMockArray = [
                [1, 1],
                [2, 2]
            ];
            var result = rotator.rotate(aMockArray, 1);
            assert.equal(result[0][0], 2);
        });
    });
