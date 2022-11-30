
//first task
let exchangeRate = 65;
let dollar = prompt(`put amount of dollars you want to exchange`);
let ruble = dollar * exchangeRate;
alert(`You will recieve ${ruble} rubles`);

//second task
let num = prompt('Put a number');
let res = +num;
if (typeof res == 'number' && res % 2 === 0) {
    console.log('odd');
} else if (typeof res == 'number' && res % 2 != 0 && isNaN(res) == false){
    console.log('even');
} else if (typeof res == 'number' && isNaN(res)){
    console.log('not a number')
} else {
    console.log('Ups, something goes wrong')
}

//third task
let x ;

typeof x == 'number' ? console.log('Number') : typeof x == 'string' ? console.log('String') : typeof x == 'boolean' ? console.log('Boolean') : console.log('Type of X undefined');

//fourth task

const x = 'string';

function reverseString(string){
    return string.split("").reverse().join("");
}
console.log(reverseString(x));

//fifth task
function getRandom(max) {
    return Math.floor(Math.random() * max);
  }

let num = getRandom(100);

console.log(num);

//sixth task

let x = [1,2,54,56,73,70,34,63,26,85];
console.log(` Total length ${x.length} elements`);

x.forEach(item => {
    console.log(item);
});

//seventh task

let x = [1,2,54,54,73,70,34,63,26,85];

for (let i = 0; i <= x.length ; i++){
    for(let j = 0; j < x.length; j++) {
        console.log( i == j);
    }
}

//eights task

let x = [0,2,undefined,null,73,70,'str',63,true,85];
var odd = 0;
var even = 0;
for (let i = 0; i <= x.length; i++){
    if(x[i] != 0 && x[i] % 2 == 0 && isNaN(x[i]) == false){
        odd++;
    } else if(x[i] != 0 && x[i] % 2 != 0 && isNaN(x[i]) == false){ 
        even++;
    };
   
}
console.log(`odd:${odd}; even: ${even};`);

//ninth task
let map = new Map();
map.set('name','Vlad');
map.set('surname','Kozhevatov');
map.set('age', 32);

for (let elem of map){
    console.log(`Ключ — ${elem[0]}, значение — ${elem[1]}`);
}
