describe("probaar metodo suma", () => {
  const sum = require("./helper");
  test("add 1 + 2 equal 3", () => {
    expect(sum(1, 2)).toBe(3);
  });

  test("add 1 + 2 equal 5", () => {
    expect(sum(2, 2)).toBe(3);
  });
});
