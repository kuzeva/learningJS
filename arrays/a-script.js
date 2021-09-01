'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);




//  forEach method

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

//for(const movement of movements){
for (const [i,movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i+1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${i+1}: You withdreww ${Math.abs(movement)}`);
  }
}

console.log('-------FOREACH-------');
movements.forEach(function(mov,i,arr){
  if (mov> 0) {
    console.log(`Movement ${i+1}: You deposited ${mov}`);
  } else {
    console.log(`Movement ${i+1}: You withdreww ${Math.abs(mov)}`);
  }
});

/*
// ARRAY METHODS
let arr = ['a', 'b', 'c', 'd', 'e'];

//SLICE
console.log(arr.slice(2));
console.log(arr.slice(2.4));
console.log(arr.slice(-2));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));
console.log(arr.slice());

//SPLICE
// console.log(arr.splice(2));
arr.splice(-1);
console.log(arr);

arr.splice(1, 2);
console.log(arr);

//REVERSE
arr = ['a', 'b', 'c', 'd', 'e'];
const arr2 = ['j', 'i', 'h', 'g', 'f'];

console.log(arr2.reverse());
console.log(arr2);

// CONCAT

const letters = arr.concat(arr2);

console.log(letters);
console.log([...arr, ...arr2]);

//JOIN
console.log(letters.join(' - '));
console.log(letters.join(' '));
*/

