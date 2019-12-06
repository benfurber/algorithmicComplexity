function timer(theFunction: void) {
  console.time("concat");
  theFunction;
  console.timeEnd("concat");
}

export { timer };
