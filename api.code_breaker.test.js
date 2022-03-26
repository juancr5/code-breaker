const request = require("supertest");
const api = require("./app_code_breaker"); // Arrange

describe("testing /api/code_breaker path", () => {
    test("it should return status code 200", done => {
        request(api)
        .get("/api/code_breaker/1234") // Act
        .then(response => {
            expect(response.statusCode).toBe(200); //Assert
            done();
        });
    });
    test("it should return an aplication/json", done => {
        request(api)
        .get("/api/code_breaker/1234") // Act
        .then(response => {
            expect(response.type).toBe("application/json"); //Assert
            done();
        });
    });
    test("it should a valid jason object", done => {
        request(api)
        .get("/api/code_breaker/1234") // Act
        .then(response => {
            expect(response.body.result).toBe("XX"); //Assert
            done();
        });
    });
    test("it should a return a correct answer", done => {
        request(api)
        .get("/api/code_breaker/1234") // Act
        .then(response => {
            expect(response.body.result).not.toBeUndefined(); //Assert
            done();
        });
    });
    test("it should return the initial status", done => {
        request(api)
        .get("/api/code_breaker/start") // Act
        .then(response => {
            expect(response.body.result).toBe("Empiece"); //Assert
            expect(response.body.counter).toBe(0); //Assert
            done();
        });
    });
})