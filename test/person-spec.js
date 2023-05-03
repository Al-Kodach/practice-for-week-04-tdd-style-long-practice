const chai = require("chai"),
  expect = chai.expect;

const spices = require("chai-spies");
chai.use(spices);

const Person = require("../problems/person");

describe("class Person", function () {
  beforeEach(function () {
    ali = new Person("Ali", 28);
  });

  it("Should have a name and age property", function () {
    expect(ali).to.have.all.keys("name", "age");
  });

  describe("sayHello() instance method", function () {
    it("Should exist", function () {
      const spy = chai.spy.on(ali, "sayHello");
      ali.sayHello();
      expect(spy).to.have.been.called();
    });

    it("should return the Person instance's name and a greetings message", function () {
      expect(ali.sayHello()).to.equal("Happy new year Ali!");
    });
  });

  describe("visit(person) instance method", function () {
    beforeEach(function () {
      person1 = new Person("Mai", 22);
      person2 = new Person("Erin", 25);
    });

    it("Should be called with a Person Instance and passed in a person instance", function () {
      person1.visit(person2);
      expect(person1).to.be.instanceOf(Person);
      expect(person2).to.be.instanceOf(Person);
    });

    it("Should return a string stating that, current visit the passed person", function () {
      expect(person1.visit(person2)).to.equal("Mai visited Erin");
    });

    context("switchVisit(person) instance method", function () {
      it("should invoke the visit function of the parameter, passing in the current instance as the argument", function () {
        expect(person1.switchVisit(person2)).to.equal("Erin visited Mai");
      });
    });
  });

  describe("update(obj) instance method", function () {
    context("if passed in with an invalid argument", function () {
      it("Should throw an error if argument is not a valid object", function () {
        expect(() => ali.update({})).to.throw(
          TypeError,
          "Provide a valid object with a name and age properties"
        );
      });
    });

    context("if passed in a valid object", function () {
      it("Should update the properties of the current Person instance", function () {
        let coolPerson = new Person("mai", 32);
        let update1 = coolPerson.update({ name: "lulu", age: 57 });

        expect(update1).to.deep.equal({ name: "lulu", age: 57 });
      });
    });
  });

  describe("tryUpdate(obj) instance method", function () {
    context("if update is successful", function () {
      it("should not throw an error but return true", function () {
        let result = ali.tryUpdate({ name: "code", age: 34 });

        expect(result).to.equal(true);
        expect(ali).to.deep.equal({ name: "code", age: 34 });
      });
    });

    context("if update not successful", function () {
      it("Should not throw an error but return false", function () {
        expect(ali.tryUpdate({})).to.be.false;
        expect(ali).to.deep.equal({ name: "Ali", age: 28 });
      });
    });
  });

  describe("greatAll(arr) static method", function () {
    beforeEach(function () {
      code = new Person("Code", 1);
      zee = new Person("Zee", 25);
    });

    it("Should throw error if input is not an array", function () {
      const badInput = "not an array but string";

      expect(() => Person.greetAll(badInput)).to.throw(
        Error,
        "greetAll only takes an array as an argument"
      );
    });

    it("should throw an error if array does not contain instances of Person", function () {
      const badInput = ["ghost", ali];

      expect(() => Person.greetAll(badInput)).to.throw(
        Error,
        "All items in array must be Person class instances."
      );
    });

    it("Should invoke sayHello() function on each person", function () {
      const spyCode = chai.spy.on(code, "sayHello");
      const spyZee = chai.spy.on(zee, "sayHello");
      const spyAli = chai.spy.on(ali, "sayHello");
      Person.greetAll([ali, code, zee]);

      expect(spyCode).to.have.been.called.once;
      expect(spyAli).to.have.been.called.once;
      expect(spyZee).to.have.been.called.once;
    });

    it("Should return an array of strings from invoking sayHello on each person", function () {
      let returnString = Person.greetAll([ali, code, zee]);
      expect(returnString).to.deep.equal([
        "Happy new year Ali!",
        "Happy new year Code!",
        "Happy new year Zee!",
      ]);
    });
  });
});
