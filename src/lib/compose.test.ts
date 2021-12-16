import { compose } from "./compose";

describe("compose", () => {
  it("Returns result of functions call", () => {
    const plus5 = (n: number) => n + 5;
    const plus10 = (n: number) => n + 10;

    const result = compose(undefined, plus5, plus10)(1);

    expect(result).toEqual(16);
  });
});
