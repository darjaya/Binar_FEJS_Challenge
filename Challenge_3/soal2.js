class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return console.log ("Hello My name is ${this.name} and I am ${this.age} years old");
  }
}

class Shark extends Animal {
  constructor(name, age, legs, species, status) {
    super(name, age, legs, species, status);
  }
}

const anShark = New Shark("Shark", 10, 0, "Shark", "Berenang");
anShark.introduce ()
// class Cat extends Animal {}

// class Dog extends Animal {}
