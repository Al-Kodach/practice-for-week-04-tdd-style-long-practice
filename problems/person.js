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

  }
}
let zee = new Person('Xee', 44);
console.log(zee.tryUpdate( {name: 'Ali', age: 33} ));
console.log(zee.tryUpdate( {} ));

Person.greetAll([])

module.exports = Person;
