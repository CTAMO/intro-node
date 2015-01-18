var chai = require("chai");
var expect = chai.expect;
var numbers = require("../../numberGenerator.js");

describe("Numbers", function () {
    it("Return 1", function () {
        expect(numbers.getNumber()).to.equal(1);
    });
    it("Return 2", function () {
        expect(numbers.getNumber()).to.equal(10);
    });

    it("Return 3", function () {
        expect(true).to.equal(false);
    });
});