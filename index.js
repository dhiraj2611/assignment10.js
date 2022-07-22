

//question 1


const person ={
    calculateAge(){
        console.log(`my name is $(this.fName) $(this.lName) and current age is $(2022 - this.bYear)`);
    }
    }
    
    const person1 = Object.create(person);
    this.fName = "ray";
    this.lName = "mendes" ;
    this.bYear = 1999
    person1.calculateAge();
    
    const person2 = Object.create(person);
    this.fName = "yogesh";
    this.lName = "gupta" ;
    this.bYear = 1998
    person2.calculateAge();
    
    
    //question2 
    //write code to explain prototype
    
    const firstobj = {
     Display() {
        console.log(`My name is ${this.name} natiality is ${this.natiality} and current age is ${2022 - this.DOB}`);
     },
     initialise(name,natiality,DOB){
        this.name = name;
        this.natiality = natiality;
        this.DOB = DOB;
    }
    }
    
    const sun = object.create(firstobj);
    sun.initialise('rose','indian',1997);
    sun.Display();
    console.log("sun");
    
    const studentproto = object.create(firstobj);
    studentproto.initialise = function (name,natiality,DOB,Subject){
        firstobj.initialise.call(studentproto,name,natiality,DOB);
        this.subject =  Subject;
    }
    
    studentproto.introduce = function(){
        console.log(`student name is ${this.name}and his DOB is ${this.DOB}`);
    }
    
    
    const firstproto = object.create(studentproto)
    firstproto.initialise("hema","indian",1995,English);
    firstproto.introduce();
    firstproto.Display();
    
    //Question 3
    // add method to calculate sum all element in array in array prototype use that method to calculate sum .
    
    array = [2,3,4,5,6];
    let sum = array.reduce((sum,car)=> sum+car , 0);
    console.log(sum);
    
    //  QUESTION 4
    //Write a javascript function to retrieve all the name of objects own and inheriated properties.
    
    function Hello (first, last, car, bike){
    
        this.firstName = first;
        this.lastName = last;
        this.car = car;
        this.bike = bike;
    }
    Hello.prototype.age = 40;
    const myBrother = new Hello("patty","gomez","audi","royal enfield");
    console.log("myBrother");
    console.log("The age of my Brother is " + myBrother.age);