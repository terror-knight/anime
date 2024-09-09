q1//
let name;
name="john";
function greet(name){
    console.log(`hello ${name}`);
}


q2//
let x,y;
x=3;
y=4;
function multiply(x,y){
console.log(`the result is ${x*y}`);
}

q3//
let h,w;
h=10;
w=2;
function divide(h,w){
console.log(`the result is ${h/w}`);
}

q4//
let cityname="San Francisco";

console.log(`the name length is ${cityname.length} and the its name is ${cityname.toLowerCase}`);


q5//
console.log(cityname.includes('san'));


q6//
let greeting="hello";

let tot=greeting.charAt(0).toUpperCase()+greeting.slice(1);
console.log(tot);

Q7//
let fruits=['apple','banana','cherry'];

console.log(fruits.length);

fruits.unshift('date');



Q8//

fruits.shift();
console.log(fruits)

q9//
fruits.includes('banana');

q10//
let num=[1,2,3,4,5];
num.map(num=> num*2);



Q11//
console.log(num.filter(includes>2));

q12//
let js=["javascript is fun!"];

const jhs=js.split(' ');
console.log(jhs);

Q13//
function reverse(xc){
const gret=xc.slice().reverse().join('');
console.log(gret);
}

q14//
num.reduce()


15//
let sent='the quick brwon fox';
sent.split(' ').join('-');
console.log(sent)



