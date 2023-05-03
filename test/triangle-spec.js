const chai = require("chai"),
  spies = require("chai-spies");
chai.use(spies);

const { Triangle, Scalene } = require("../problems/triangle"),
  expect = chai.expect;

describe("Triangle Class", () => {
  let triangele;
  let triangele2;

  beforeEach(() => {
    triangele = new Triangle(8, 4, 5);
    triangele2 = new Triangle(1, 2, 4);
  });

  describe("Triangle constructor", () => {
    it("Should set 3 sides properties, side1, side2 and side3", () => {
      expect(triangele).to.have.property("side1");
      expect(triangele.side1).to.equal(8);

      expect(triangele).to.have.property("side1");
      expect(triangele.side2).to.equal(4);

      expect(triangele).to.have.property("side3");
      expect(triangele.side3).to.equal(5);
    });
  });

  describe("getParameter instance method", () => {
    it("Should return the parameter of the triangle", () => {
      let expected = triangele.getParameter();
      expect(expected).to.equal(17);
    });
  });

  describe("hasValidSideLengths instance method", () => {
    context(
      "If the sum of any two sides is greater than the remaining side",
      () => {
        it("Should return true", () => {
          expect(triangele.hasValidSideLengths()).to.be.true;
        });
      }
    );

    context(
      "If the sum of any two sides is less than the remaining side",
      () => {
        it("Should return false", () => {
          let expected = triangele2.hasValidSideLengths();
          expect(expected).to.false;
        });
      }
    );
  });

  describe("validate() instance method", () => {
    it("Should add an isValid property with a value of true if triangle is valid", () => {
      triangele.validate();
      expect(triangele.isValid).to.be.true;
    });

    it("Should add an isValid property with a value of false if triangle is invalid", () => {
      triangele2.validate();
      expect(triangele2.isValid).to.be.false;
    });
  });

  describe("getValidTriangles static method0", () => {
    it("Should return all valid triangle(s)", () => {
      let expected = Triangle.getValidTriangles([triangele, triangele2]);
      expect(expected).to.deep.equal([triangele]);

      let triangele3 = new Triangle(4, 5, 3);
      let expected1 = Triangle.getValidTriangles([
        triangele,
        triangele2,
        triangele3,
      ]);

      expect(expected1).to.deep.equal([triangele, triangele3]);
    });
  });
});

describe("Scalene class", () => {
  let scaleneTriangle;
  beforeEach(() => {
    scaleneTriangle = new Scalene(4, 1, 6);
  });

  it("Should inherit from the Triangle class", () => {
    expect(new Scalene()).to.be.an.instanceOf(Triangle);
  });

  it("Should be initialized with 3 side lengths", () => {
    expect(scaleneTriangle.side1).to.equal(4);
    expect(scaleneTriangle.side2).to.equal(1);
    expect(scaleneTriangle.side3).to.equal(6);
  });

  it("Should hava an `isValidTriangle` property, with a value derived from the `Triangle` class `hasValidSideLengths` method", () => {
    expect(scaleneTriangle.isValidTriangle).to.be.false;
  });

  describe("isScalene instance method", () => {
    it("Should have an instance method isScalene", () => {
      const spyIsScalene = chai.spy(scaleneTriangle, "isScalane");
      scaleneTriangle.isScalene();
      expect(spyIsScalene).to.be.called;
    });

    it("Should return true if all sides have different lengths", () => {
      expect(scaleneTriangle.isScalene()).to.equal(true);
    });

    it("Should return false if two or all sides have the same length", () => {
      let scalene2 = new Scalene(5, 8, 8);
      expect(scalene2.isScalene()).to.equal(false);
    });
  });

  describe("validate instance property", function () {
    it("Should over-write the Triangle validate intance methoed", function () {
      const spy = chai.spy(scaleneTriangle, "isValidScalene");
      scaleneTriangle = new Scalene(2, 1, 1);

      scaleneTriangle.isValidScalene();
      expect(spy).to.be.called;
      expect(scaleneTriangle.isValidScalene).to.equal(false);
    });
  });
});
