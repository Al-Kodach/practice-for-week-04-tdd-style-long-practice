const chai = require("chai");
const spies = require("chai-spies");
const { beforeEach } = require("mocha");
chai.use(spies);

const expect = chai.expect;

const { myMap } = require("../problems/my-map");

describe("myMap", function () {
  this.beforeEach(function () {
    callback = el => el * 2;
    inputArray = [1, 2, 3];
  });

  context(
    "Should return a new array where the callback has been called upon each element in the original array",
    function () {
      it("should not call the built in Array.map method", function () {
        const mapSpy = chai.spy.on(inputArray, "map");
        myMap(inputArray, callback);
        expect(mapSpy).to.not.have.been.called();
      });

      it("Should call callback function on every element", function () {
        const spy = chai.spy(callback);
        expect(myMap(inputArray, callback)).to.deep.equal([2, 4, 6]);
      });

      it("Should return a new array without mutatin the original array", function () {
        let newArray = myMap(inputArray, callback);
        expect(newArray).to.deep.equal([2,4,6]);
        expect(inputArray).to.deep.equal([1, 2, 3]);
      });
    }
  );
});
