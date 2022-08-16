const app = require("../app")
const request = require("supertest")


describe("GET /contacts", () => {
    test("Should respond with a 401 status code because it is not an admin", async () => {
        const response = await request(app).get("/contacts").send()
        expect(response.statusCode).toBe(401)
    })
    test("Should respond with a 200 using a token and", async () => {
        const response =  await request(app).get("/contacts").set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJmaXJzdE5hbWUiOiJVc3VhcmlvIiwibGFzdE5hbWUiOiJEZW1vIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwicGFzc3dvcmQiOiIxMjM0IiwiaW1hZ2UiOiJodHRwczovL3d3dy5kZXNpZ25ldm8uY29tL3Jlcy90ZW1wbGF0ZXMvdGh1bWJfc21hbGwvY29sb3JmdWwtaGFuZC1hbmQtd2FybS1jb21tdW5pdHkucG5nIiwicm9sZUlkIjoiMSJ9.6LgJGqxKgHt8ITOHLI2Ea4H7QOEfJII37AWEYIKlUHk')
        expect(response.statusCode).toBe(200)
    })
    test("test if 'id' is defined", async () => {
        const response =  await request(app).get("/contacts").set('Authorization', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQiLCJmaXJzdE5hbWUiOiJVc3VhcmlvIiwibGFzdE5hbWUiOiJEZW1vIiwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIiwicGFzc3dvcmQiOiIxMjM0IiwiaW1hZ2UiOiJodHRwczovL3d3dy5kZXNpZ25ldm8uY29tL3Jlcy90ZW1wbGF0ZXMvdGh1bWJfc21hbGwvY29sb3JmdWwtaGFuZC1hbmQtd2FybS1jb21tdW5pdHkucG5nIiwicm9sZUlkIjoiMSJ9.6LgJGqxKgHt8ITOHLI2Ea4H7QOEfJII37AWEYIKlUHk')
        expect(response.body[0].id).toBeDefined()
    })

})

describe("POST /contacts", () => {
    test("Should create a new contact", async() => {
        const response = await request(app).post("/contacts").send({
            "name":"Ignacio",
            "email":"ignacio.moenen@gmail.com",
            "message":"Hola que hace?"
        })
        expect(response.statusCode).toBe(200)
        
    })
    test("response must be an Object", async () => {
        const response = await request(app).post("/contacts").send({
            "name":"Ignacio",
            "email":"ignacio.moenen@gmail.com",
            "message":"Hola que hace?"
        })
        expect(response.body).toBeInstanceOf(Object)
    })
    test("Should show an error if there's no mail or name", async() => {
        const response = await request(app).post("/contacts").send()
        expect(response.body.message).toBeDefined()
    })
})