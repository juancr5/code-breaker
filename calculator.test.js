/* AAA Pattern
Arrange: Preparamos las pruebas
Act: Ejecutamos las funciones de negocio
Assert: validar el resultado
*/

const calc = require("./calculator.js");    //Arrange

describe("Add operator", () => {
  test("adds 1 + 2 to equal 3", () => {
    let result = calc.add(1, 2);            //Act
    expect(result).toBe(3);                 //Assert
  });

  test("adds 4 + 5 to equal 9", () => {
    let result = calc.add(4, 5);
    expect(result).toBe(9);
  });
});

describe("Substract operator", () => {
  test("adds 4 - 5 to equal -1", () => {
    let result = calc.subs(4, 5);
    expect(result).toBe(-1);
  });
  test("adds 8 - 5 to equal 3", () => {
    let result = calc.subs(8, 5);
    expect(result).toBe(3);
  });
});

describe("Division operator", () => {
  test("adds 4 / 5 to equal 0.8", () => {
    let result = calc.div(4, 5);
    expect(result).toBe(0.8);
  });

  test("adds 4 / 0 to equal null", () => {
    let result = calc.div(4, 0);
    expect(result).toBe(null);
  });
});
