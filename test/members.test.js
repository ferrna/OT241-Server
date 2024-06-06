const app = require("../app")
const request = require("supertest")

describe("GET /members", () => {
    test("Should respond with a 200", async () => {
        const response = await request(app).get("/members").send()
        expect(response.statusCode).toBe(200)
    })
    test("Should respond with an Array", async () => {
        const response = await request(app).get("/members").send()
        expect(Array.isArray(response.body)).toBe(true)
    })
    test("should return an array with members", async() => {
        const response = await request(app).get("/members").send()
        expect(response.status).toBe(200);
            response.body.forEach(e => {
                expect(typeof e.id).toBe('number');
                expect(typeof e.name).toBe('string');
                expect(typeof e.image).toBe('string');
                expect(new Date(e.createdAt) instanceof Date).toBeTruthy();
                expect(new Date(e.updatedAt) instanceof Date).toBeTruthy();
            })
    })

    describe("POST /members", () => {
        test("should create a new member", async () => {
            const response = await request(app).post("/members")
                                                                .set({
                                                                    'Content-Type': 'application/json',
                                                                })
                                                                .field("name", "ignacio")
                                                                .attach("image", "test/mockdata/imgmock.jpg")
            expect(response.statusCode).toBe(201)
        })
        test("Should send an error if the 'name' input is missing", async () => {
            const response = await request(app).post("/members")
                                                                .set({
                                                                    'Content-Type': 'application/json',
                                                                })
                                                                .attach("image", "test/mockdata/imgmock.jpg")
            expect(response.statusCode).toBe(400)
            expect(response.body.message).toBe("Nombre del usuario debe existir y ser un string")
        })
    })
})

describe("PUT /members", () => {
    test("Should edit the information of a member if the 'id' is given in the params", async() => {
        const response =  await request(app).put("/members/1")
                                                            .set({
                                                                'Content-Type': 'application/json'
                                                            })
                                                            .field("name", "Nicolas")
                                                            .attach("image", "test/mockdata/imgmock.jpg")
    expect(response.statusCode).toBe(200)
    })
})

describe("DELETE /members", () => {
    test("Should delete a member if a 'id' is given in params", async() => {
        const response =  await request(app).delete("/members/1")
        expect(response.statusCode).toBe(200)
        expect(response.body.message).toBe("User Delete success")
    })
    test("should show an error if cannot find the id", async() => {
        const response =  await request(app).delete("/members/40")
        expect(response.statusCode).toBe(404)
        console.log(response.body)
        expect(response.body.error).toBe("The user not exist")
    })
})