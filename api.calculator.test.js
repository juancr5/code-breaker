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
    
})