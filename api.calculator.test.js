const request = require("supertest");
const api = require("./api.calculator"); // Arrange

describe("testing /add path", () => {
    test("it should return status code 200", done => {
        request(api)
        .get("/add?a=1&b=1") // Act
        .then(response => {
            expect(response.statusCode).toBe(200); //Assert
            done();
        });
    });
    test("it should return an aplication/json", done => {
        request(api)
        .get("/add?a=1&b=1") // Act
        .then(response => {
            expect(response.type).toBe("application/json"); //Assert
            done();
        });
    });
    test("it should a valid jason object", done => {
        request(api)
        .get("/add?a=1&b=1") // Act
        .then(response => {
            expect(response.body.result).toBe(2); //Assert
            done();
        });
    });
    test("it should a return a correct answer", done => {
        request(api)
        .get("/add?a=1&b=1") // Act
        .then(response => {
            expect(response.body.result).not.toBeUndefined(); //Assert
            done();
        });
    });
    
})