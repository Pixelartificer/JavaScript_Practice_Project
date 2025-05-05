// document.getElementById('main').innerHTML = "Lawrence";
// document.getElementById('main').style.fontSize = "80px";

// let a = "Lawrence";
// let b = "Ranjan";
// let c = "D'Cruze";
// let d = `my name is ${a} ${b} ${c}`


// function myfun(){
//     document.getElementById("main").innerHTML = d;
// }
// document.getElementById('main').innerHTML = c;

// let e = 16 + "Lawrence" + 5

// console.log(e)

// let f = "Lawrence" + 16 + 5;
// console.log(f);

// let x = 5;
// let y = 5;
// let z = 6;

// let m = x==y;
// let n = y==z;

// console.log(n);
// console.log(m);

// function sleep(m, n){
//     document.getElementById('main').innerHTML += (`${m} my name is ${n} <br>` );

// }

// sleep("hello", "Lawrence");
// sleep("hello", "Aiden");
// sleep("hello", "Enrique");
// sleep("hello", "Munna");


// const car={
//     name: "Volvo",
//     model: "500S",
//     drive: function(){
//         return "I am driving car"
//     },
//     carName: function(){
//         return this.name + this.model
//     },
//     speed:["50 Km", "60 KM", "80 Km"]
// }


// console.log(car.carName())


// const displayDate = ()=>{
//     document.getElementById("main").innerHTML = Date();
// }

// let test = "OID1027325137";
// console.log(test.length);

// let text = "my name is \"Lawrence Ranjan D'Cruze\" and I am a frontend Programer";
// console.log(text);

// let x = new String("Lawrence");
// console.log(typeof x)

// const fruit = "apple, Banana, orange";

// let x = fruit.substr(6, 6)
// console.log(x);

// let y = ("I love Aiden and Aiden is a good boy");
// let z = y.replace("Aiden", "Enrique");
// console.log(z.toLocaleUpperCase());

// y.toLocaleUpperCase;

// console.log(y[5])

// const car = ["Volvo", "Toyota", "Feat", "Honda"];

// car[car.length] = "Banana"

// let cLength = car.length;

// let text = "<ul>"
// for(let a = 0; a < cLength; a++){
//     text += "<li>" + car[a] + "</li>"
// }

// text += "</ul>";

// console.log(car);

// document.getElementById("main").innerHTML = text;


// car[car.length] = "Mango";

// console.log(car);

// let text = "<ul>";
// car.forEach(myFun)
// text += '</ul>';


// function myFun(value) {
//     text += '<li>' + value + '</li>';
// }




// document.getElementById("main").innerHTML = text;

// console.log(car[car.length - 1]);

// const fruits = [];
// fruits["name"]= 'Banana'
// fruits[1]= 'Orange'
// fruits[2]= 'Malta'
// fruits[3]= 'Pinaple'
// fruits[4]= 'Watermelon'
// fruits[5]= 'Jack Fruit'

// console.log(fruits["name"]);

// fruits.join(" ")
// console.log(fruits);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift( "Pinaple")
fruits.splice(2, 0, "Kiwe", 'Watermelon')
document.getElementById("main").innerHTML = fruits.join("  ");
document.getElementById('main').style.fontSize = "80px";