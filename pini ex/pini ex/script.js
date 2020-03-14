// 1.
const array = [3, 1, 5, 8];
const newA = array.sort();
const newB = [];
while (newA.length !== 0) {
  newB.push(newA.pop() * newA.shift());
}

console.log(newB.reduce((a, b) => a + b));

// 2.
function makeNegative(num) {
  if (num > 0) {
    return -Math.abs(num);
  } else if (num == 0 || num < 0) {
    return num;
  }
}

console.log(makeNegative(0));
console.log(makeNegative(-3));
console.log(makeNegative(1));

// 3.
// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"
// For 4 or more names, the number in and 2 others simply increases.

function likes(array) {
  const and = array.length - 2;
  const all = array.length > 5;
  switch (array.length) {
    default:
      pr = `${array[0]}, ${array[1]} and ${and} others like this"`;
      break;
    case 4:
      pr = `${array[0]}, ${array[1]} and ${and} others like this"`;
      break;
    case 3:
      pr = `${array[0]}, ${array[1]} and ${array[2]} like this`;
      break;
    case 2:
      pr = `${array[0]} and ${array[1]} like this`;
      break;
    case 1:
      pr = `${array[0]} likes this`;
      break;
    case 0:
      pr = "no one likes this";
      break;
  }
  return pr;
}

console.log(likes([]));
console.log(likes(["Peter"]));
console.log(likes(["Jacob", "Alex"]));
console.log(likes(["Max", "John", "Mark"]));
console.log(likes(["Alex", "Jacob", "Mark", "Max"]));
console.log(likes(["Peter", "Alex", "Jacob", "Mark", "Max", "Jon", "Dor"]));

// 4.

function max(array) {
  return array.reduce((max, p) => (p > max ? p : max), 0);
}

function sumOfEvens(array) {
  let theSum = 0;
  array.reduce(function sum(total, num) {
    if (!(num % 2)) {
      console.log(num);
      theSum = total + num;
      return theSum;
    }
    return theSum;
  }, 0);
  return theSum;
}

function average(array) {
  const an = array.reduce((a, b) => a + b, 0);
  return an / array.length;
}

function test_equal(actual, expected, msg) {
  if (actual !== expected) {
    console.log(
      `Error testing ${msg || ""}. expected: ${expected}, got ${actual}`
    );
  }
}

test_equal(max([3, 5, 77, 2, 62]), 77);
test_equal(sumOfEvens([3, 4, 5, 77, 2, 62]), 68);
test_equal(average([3, 5, 4, 5, 5]), 4.4);
