const chai = require("chai");
const expect = chai.expect;

const { returnsThree, reciprocal } = require("../problems/number-fun");

describe("returnsThree function", function () {
  it("should return 3", function () {
    expect(returnsThree()).to.equal(3);
  });
});

describe("reciprocal function", function () {

  context('valid range, 1 to 1000000', function () {
    it("should return the reciprocal of the given number", function () {
      expect(reciprocal(4)).to.equal(0.25);
      expect(reciprocal(1/3)).to.equal(3);
      expect(reciprocal(1.38)).to.equal(0.725);
    });
  });

  context("invalid input", function () {
    it("should throw a range error", function () {
      expect(() => reciprocal(1000001)).to.throw();
      expect(() => reciprocal(-3) ).to.throw();
    });
  });
});
