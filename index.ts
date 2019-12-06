import { timer } from "./timer";

let output = "";
const array = [1, 2, 3, 4, 5, 6];

function functionToTest() {
  array.forEach(number => {
    output += number;
  });
}

timer(functionToTest());
