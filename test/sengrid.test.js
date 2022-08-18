const app = require("../app")
const request = require("supertest")
const { validMail, invalidMail } = require("./mockdata/emailsData")

describe("Testing mail delivery", () => {
    test("Sending a contact mail to response with a mail", async() => {
        const response = await request(app).post(`/mails/${validMail}`).send()
        expect(response.statusCode).toBe(200)
        expect(response.body.msg).toBe("Email sended succesfully")
    })
    test("Sending an invalid mail results in a msg error and a 400 status", async () => {
        const response = await request(app).post(`/mails/${invalidMail}`).send()
        expect(response.statusCode).toBe(400)
        expect(response.body.msg).toBe("Could not send email, an error has occurred")

    })
})