1. variable visibility 

function order(x, y){
  if (x > y) {
    let tmp = x; // visibility - inside the block
    x = y;
    y = tmp;
  }
  console.log(tmp===x);
  return[x, y];
}

function order(x, y){
  if (x > y) {
    var tmp = x; // visibility - inside the block
    x = y;
    y = tmp;
  }
  console.log(tmp===x);
  return[x, y];
}

2. Symbol - the forth type
let sym = Symbol();
let num = 777
let str = "Who am I???"
let obj = {}
let arr = [3]
let boo = true
typeof sym;
typeof num
typeof str 
typeof obj
typeof arr

/*let specialMethod = Symbol();
obj[specialMethod] = function (arg){
  ...
}
obj[specialMethod](123);*/

/*obj = {}
let specialMethod = Symbol();
obj[specialMethod] = function (arg){
  "new method!!!"
}
obj[specialMethod](123);*/

3. Object literals.

let obj = {
  myMethod(){
    return "I'm just a method!!!"
  }
};

var obj = {
  myMethod: function(){
    ...
  }
};

let x = 4;
let y = 1;
obj = {x, y};
//obj = {x: x, y: y}; the same

let propKey = 'hello';
let obj = {
  ['fo' + 'o']: 123,
  [propKey](){
    return 'hi';
  },
};
console.log(obj.hello()); // hi

/*let obj = {
  [Symbol.iterator](){
    ...
  }
};
for (let x of obj){
  console.log(x);
}*/

let jane = {};
jane.first = 'Jane';
jane.last = 'Doe';

let jane = {
  first: 'Jane',
  last: 'Doe'
};

let f = jane.first;
let l = jane.last;
let ??? = jane;

4. Destructing
let obj = {first: 'Jane', last: 'Doe'}; // constructoring
let { first: f, last: l } = obj; // destructoring
f - ?, l - ?

let [x, y] = ['a', 'b'];
let [x, y, ...rest] = ['a', 'b', 'c', 'd'];
[x, y] = [y, x]
let [all, year, month, day] = 
/^(\d\d\d\d)-(\d\d)-(\d\d)$/.exec('2999-12-31');

function func1(x, y='default'){
  return [x, y];
}

func1(1,2)
func1()


function func2(arg0, ...others){
  return others;
}
func2()
func2('a', 'b', 'c')

function func(arg0 ,{ opt1, opt2 }){
  return [opt1, opt2];
}

func(0, {opt1: 'a', opt2: 'b'});

Math.max(...[7, 4, 11]);
let arr1 = ['a', 'b'];
let arr2 = ['c', 'd'];
arr1.push(...arr2);

new Date(...[1912, 11, 24])

let a = [1, ...[2,3], 4];
let x = ['a', 'b'];
let y = ['c'];
let z = ['d', 'e'];

xyz = [...x, ...y, ...z];

let set = new Set([11, -1, 6]);
arr = [...set];