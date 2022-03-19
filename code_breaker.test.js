
const codeBreaker = require('./code_breaker')

describe("Win case", () => {
  test("case XXXX", () => {
    let result = codeBreaker.solve("1234");
    expect(result).toBe("XXXX");
  });

  test("case XX", () => {
    let result = codeBreaker.solve("1298");
    expect(result).toBe("XX");
  });

  test("case XX-", () => {
    let result = codeBreaker.solve("1248");
    expect(result).toBe("XX-");
  });
  test("case XX-", () => {
    let result = codeBreaker.solve("1293");
    expect(result).toBe("XX-");
  });
  test("case XX--", () => {
    let result = codeBreaker.solve("1243");
    expect(result).toBe("XX--");
  });
  test("case ----", () => {
    let result = codeBreaker.solve("4321");
    expect(result).toBe("----");
  });
  test("case --", () => {
    let result = codeBreaker.solve("4356");
    expect(result).toBe("--");
  });
  test("case XXX", () => {
    let result = codeBreaker.solve("5234");
    expect(result).toBe("XXX");
  });
  test("case no asserts", () => {
    let result = codeBreaker.solve("9876");
    expect(result).toBe("");
  });

});
