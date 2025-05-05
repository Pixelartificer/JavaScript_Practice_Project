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

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.unshift( "Pinaple")
// fruits.splice(2, 0, "Kiwe", 'Watermelon')
// document.getElementById("main").innerHTML = fruits.join("  ");
// document.getElementById('main').style.fontSize = "80px";

// const fruitss = ["Banana", "Orange", "Apple", "Mango"];
// const fruitsss = ["Banana", "Orange", "Apple", "Mango"];
// const allFruits = fruitss.concat(fruitsss);
// document.getElementById('main').innerHTML = allFruits.join(' ')
// document.getElementById('main').innerHTML = allFruits.sort().join(' ')

// const number = [1, 5, 8, 6, 4, 50, 15, 6, 280, 61, 72];
// number.sort((a, b)=>{
//     return a - b
// })
// console.log(number);

// const numbers = [1, 5, 8, 6, 4, 50, 15, 6, 280, 61, 72];
// numbers.sort((a, b)=>{
//     return b - a
// })
// console.log(numbers);

// const numberss = [1, 5, 8, 6, 4, 50, 15, 6, 280, 61, 72];
// numberss.sort(()=>{
//     return 0.5 - Math.random();
// })

// console.log(numberss);

const number = [2, 54, 8, 6, 4, 9, 52, 92, 72, 84];

// const myFun = (value, index, array)=>{
// console.log(value)
// console.log(index)
// console.log(array)
// console.log('-----------')
// return value * 2
// };
// const nyFun1 =number.sort((a, b)=>{
//     return a - b
// })

// const myFun2 = (value)=>{
//     return value * 2
// }

// number.forEach(myFun)
// const newNum= number.map(myFun2);

// console.log(number)
// console.log(newNum)

// const myFun3 = (value, index, array)=>{
//     return value > 60;
// }
// number.forEach(myFun)
// const newNum1= number.filter(myFun3);




// console.log(newNum1)

// const myFun5 = (total, value, index, array)=>{
//     console.log(total);
//     console.log("-------");
// return total + (value * 2)
// }

// const newNumber = number.reduce(myFun5, 10);

// console.log(newNumber);


const a = Array.from('abcdefg');
console.log(a)

const b = a[2];
console.log(b);