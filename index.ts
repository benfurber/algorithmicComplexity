let output = "";
const array = [1, 2, 3, 4, 5, 6];

function timer(theFunction: void) {
  console.time("concat");
  theFunction;
  console.timeEnd("concat");
}

function functionToTest() {
  array.forEach(number => {
    output += number;
  });
}

timer(functionToTest());
