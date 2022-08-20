const app = require('../app.js')
const request = require('supertest')

describe('get /users/all', () => {
    test("should response with Access Denied, Invalid token",async ()=>{
        const response = await request(app).get('/users/all').send()

        expect(response.statusCode).toBe(401)
    })
});

describe('get /users/:id', ()=> {
    test("should response with a status 404 when the id is not found in table",async()=>{
        const response = await request(app).get('/users/2').send()

        expect(response.statusCode).toBe(404)
    })

    test("should response with a json object whit the information of users",async()=>{
        const response = await request(app).get('users/3').send()

        console.log(response.body)
        expect(response.body).toBeInstanceOf(Object)
    })
})


describe('post /users', ()=>{
    test("shloud response with a status 200 whit the user is created", async()=>{
        const response = await request(app).post("/auth/register")

        expect(response.errors)
    })

    test("Should response with a json object when user is created", async()=>{
        const response = await request(app).post("/auth/register").send()

        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"))
    })

    //Users Already Exist
    test("Should response a text 'User hasready exist' ",async()=>{
        const response = await request(app).post("/auth/register").send({
            firstName:"juan",
            lastName:"mercado",
            email:"juanmer382@gmail.com",
            password:"123456789"
          })

          expect(response.text).toMatch('YA EXISTE')
    })

    //Deberia responder con un password
    test("Should response a text 'password invalid' ",async()=>{
        const response = await request(app).post("/auth/register").send({
            firstName:"juan",
            lastName:"mercado",
            email:"juanmer382@gmail.com",
            password:"1234"
          })

        expect(response.body.errors[0].msg).toEqual(expect.stringMatching('Ingrese un password valido'))
    })
    //Deberia responder con un firstname
    test("Should response a text 'firstname invalid' ",async()=>{
        const response = await request(app).post("/auth/register").send({
            lastName:"mercado",
            email:"juanmer382@gmail.com",
            password:"123456789"
          })

        expect(response.body.errors[0].msg).toEqual(expect.stringMatching('Ingrese un nombre'))
    })
    //deberia responder con un lastname
    test("Should response a text 'firstname invalid' ",async()=>{
        const response = await request(app).post("/auth/register").send({
            firstName:"juan",
            email:"juanmer382@gmail.com",
            password:"123456789"
          })

        expect(response.body.errors[0].msg).toEqual(expect.stringMatching('Ingrese un apellido'))
    })

    //deberia responder con un email valido
    test("Should response a email valid' ",async()=>{
        const response = await request(app).post("/auth/register").send({
            firstName:"juan",
            lastName:"mercado",
            email:"papanicolao23222@gmail.com",
            password:"123456789"
          })

        expect(response.body.data.email).toEqual(expect.stringMatching(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/))
    })

})