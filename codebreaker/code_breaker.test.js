/*
If the variable are changing use after() and before()

before() is run once before all the tests in a describe
after()   is run once after all the tests in a describe
beforeEach() is run before each test in a describe
afterEach()   is run after each test in a describe
*/

const codeBreaker = require('./code_breaker')



describe('test match function', () => {

  beforeEach(() => {
    codeBreaker.secretSet('1234');
  })

  test("full match all digits", () => {
    let result = codeBreaker.solve("1234"); //Act
    expect(result).toBe("XXXX"); //Assert
  });

  test("digits not exist", () => {
    let result = codeBreaker.solve("9578");
    expect(result).toBe("");
  });

});


describe("Win case", () => {

  beforeEach(() => {
    codeBreaker.secretSet('1234');
  })

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
