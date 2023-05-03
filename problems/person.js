class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    return `Happy new year ${this.name}!`;
  }

  visit(otherPerson) {
    return `${this.name} visited ${otherPerson.name}`;
  }

  switchVisit(otherPerson) {
    return otherPerson.visit(this);
  }

  update(obj) {
    if (obj.name && obj.age) {
      this.name = obj.name;
      this.age = obj.age;
      return this;
    } else {
      throw TypeError("Provide a valid object with a name and age properties");
    }
  }

  tryUpdate(obj) {
    try {
      this.update(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  static greetAll(arr) {
    if (!Array.isArray(arr)) {
      throw Error("greetAll only takes an array as an argument");
    }

    if (!arr.every((el) => el instanceof Person)) {
      throw Error("All items in array must be Person class instances.");
    }

    const helloStr = arr.map(person => person.sayHello());

    return helloStr;
  }
}

module.exports = Person;
