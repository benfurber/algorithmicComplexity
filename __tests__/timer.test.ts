import { timer } from "../timer";

describe("timer()", () => {
  it("calls the function provided", () => {
    const theFunction = jest.fn();

    timer(theFunction());

    expect(theFunction).toHaveBeenCalled();
  });
});
