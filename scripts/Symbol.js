var user = {};
  Object.defineProperty( user, 'role', {
      enumerable: false,
      value: 'admin'
  });
var userRole = user.role; // 'admin'


var role = Symbol();
  var user = {
      id: 1001,
      name: 'Administrator',
      [role]: 'admin'
  };

var role = Symbol();
  var user = {
      ['id']: 1001,
      ['name']: 'Administrator',
      [role]: 'admin'
  };

var userName = user.name;    // 'Administrator'
    // OR
var userName = user['name']; // 'Administrator'

var userRole = user.role;    // undefined
    // OR
var userRole = user['role']; // undefined

var role = Symbol();
var user = {
    id: 1001,
    name: 'Administrator',
    [role]: 'admin'
};
var userRole = user[role]; // 'admin'


var score = Symbol();
var score = Symbol('user score');
console.log( score ); // Symbol(user score)
var score = new Symbol('score'); // TypeError

var symbol = Symbol('symbol');
var string = 'string';
var number = 5;

var symbolObj = Object( symbol );
var stringObj = Object( string );
var numberObj = Object( number );

console.log( symbol );     // Symbol(symbol)
console.log( string );     // 'string'
console.log( number );     // 5
console.log( symbolObj );  // Symbol {}
console.log( stringObj );  // String { 0: 's', 1: 't', 2: 'r', 3: 'i', 4: 'n', 5: 'g', length: 6, [[PrimitiveValue]]: 'string' }
console.log( numberObj );  // Number { [[PrimitiveValue]]: 5 }

var firstScore = Symbol('score');
var secondScore = Symbol('score');
firstScore === secondScore; // false