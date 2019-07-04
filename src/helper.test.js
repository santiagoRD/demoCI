describe("probaar metodo suma", () => {
  const sum = require("./helper");
  test("add 1 + 2 equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
