console.log('JS Hola')
let money = 10000.0;
const interest = 0.3;

// Logging
console.log('You owe me :-',money*(1+interest))

// Tuple and accessing properties in them
person = {
    name : 'Chandu',
    age : 21
};

console.log(person)
console.log(person.name)

// Dynamic creation(Not error)
colors = ['re','ef'];
console.log(colors)
colors[5] = '32e'
console.log(colors);

// Tuple way for object
const rectangle = {
    side:10,
    area :function(){
        return this.side*this.side;
    },
    perimeter:function(){
        return 4*this.side;
    }
}

console.log(rectangle.area())

// Rectangle Factory Property
function createRect(side){
    return {
        side,
        area : function(){
            return this.side*this.side;
        },
        perimeter : function(){
            return 4*this.side;
        }
    }
}

rect1 = createRect(3);

console.log(rect1.area())

// Circle Constructor Property
function Circle(radius){
    this.radius = radius;
    this.area = function(){
        return 3.14*this.radius*this.radius;
    }
    this.perimeter = function(){
        return 2*3.14*this.radius;
    }
}

// Different ways of creating circle
const circle1 = new Circle(1);
const circle2 = {};
const circle3 = {};
Circle.call(circle2,2);
Circle.apply(circle3,[3]);
const circle4 = new Circle(4.0);
console.log(circle1, circle2, circle3, circle4)
console.log(circle1.area());
console.log(circle2.area());
console.log(circle3.area());
console.log(circle4.area());

// Test for pass by ref vs pass by obj
let a = b = {};
a.no = true;
console.log(a,b);

// Delete stuff
delete a['no'];
console.log(a,b);

// Loops if-else conditions
let newcircle = new Circle(3.14);

for (let key in newcircle){
    if(typeof newcircle[key]!== 'function'){
        console.log('This is not function');
        console.log(key, newcircle[key]);
    }
    else if(typeof newcircle[key]==='function'){
        console.log('This is a function');
        console.log(key, newcircle[key]);
    }
    else{
        throw new Error('Cannot come here!!!');
    }
}

console.log(Object.keys(newcircle));

if ('radius' in newcircle)
    console.log('Newcircle has radius')


// Private variables and methods in objects
function Sphere(radius){
    this.radius = radius;
    this.volume = function(){
        return 4.0/3.0*3.14*(this.radius)**3;
    }
    // Private cannot be accessed from outside
    let diamond = false;
    let put_diamond = function(){
        diamond = true;
    }
    // getter and setter
    let gold = false;
    Object.defineProperty(this, 'gold',{
        get: function(){
            return gold;
        },
        set: function(value){
            if (typeof value !== "boolean")
                throw new Error('Has to be of type boolean')
            gold = value;
        }
    })
}

let sphere = new Sphere(2.0);
console.log(sphere.volume());
console.log(sphere.diamond);// returns undefined
console.log(sphere.gold);
// sphere.gold = 'str'// throws and error
console.log(sphere.gold)
sphere.gold = true
console.log(sphere.gold)
