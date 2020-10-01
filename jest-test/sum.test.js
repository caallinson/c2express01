const sum = require("./sum");
test("adds 1 + 3", () => {
    expect(sum(1,2)).toBe(3);
});
test("fails adds 1 + 3", () => {
    expect(sum(1,2)).toBe(4);
});