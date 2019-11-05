// Class for Mammal type(s)
class Mammal {
    
    // constructor method mush be included and will run when creating objects of this class.
    constructor(metabolism, type, limbs, mouth, nose, eyes, tail, hair, mammary, life) {
        
        // Keyword this refers to the current object being created. The value refers to the parameter.
        this.metabolism = metabolism;
        this.type = type;
        this.limbs = limbs;
        this.mouth = mouth;
        this.nose = nose;
        this.eyes= eyes;
        this.mammary = mammary;
        this.lifeExpectancy = life;
        this.hair = hair;
        this.tail = tail;

        console.log(this.type + " is playing with his toy.");
    }
    
    bark() {
        console.log(this.type + " barks at another dog.");
    }

    walk() {
        console.log(this.type + " wants a walk.");
        }
    
    eat(){
        console.log(this.type + " really likes to eat.");
    }

}

// Creating a dog.
const firstMammal = new Mammal("warm blooded", "my dog", 4, 1, 1, 2, 1, true, 10, 16, 4);

// Dog walks and barks.
firstMammal.walk();
firstMammal.bark();
firstMammal.eat();

console.log(firstMammal);

