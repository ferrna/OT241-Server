const app = require("../app")
const request = require("supertest")

describe("GET /organization", () => {
    test("Should show the infomation of the Organization and their social network", async () => {
        const response  = await request(app).get("/organization/1/public").send()
        expect(response.statusCode).toBe(200)
        expect(response.body).toBeInstanceOf(Object)
    })
    test("Should show an error message if the organization doesnt exists", async () => {
        const response = await request(app).get("/organization/2/public").send()
        expect(response.statusCode).toBe(404)
        expect(response.body.message).toBe("No se ha encontrado organización")
    })
})