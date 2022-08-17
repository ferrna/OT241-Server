const app = require("../app");
const request = require("supertest");

const aNewsObject = {
  name: "A news title",
  content: "A string text with the content of the news",
  image: "http://www.image.com/news-image",
};
const anInvalidNewsObject = {
  name: "",
  content: "A string text",
  image: 2,
};
const aNewsObjectUpdate = {
  name: "A news title updated",
  content: "A string text with the content of the news updated",
  image: "http://www.image.com/news-image",
};

describe("POST /news", () => {
  test("Should respond with a 200 using a valid body and", async () => {
    const response = await request(app)
      .post("/news")
      .send({
        ...aNewsObject,
      });
    expect(response.statusCode).toBe(200);
  });
  test("should create a new news", async () => {
    const response = await request(app)
      .post("/news")
      .send({
        ...aNewsObject,
      });
    expect(response.statusCode).toBe(200);
  });
  test("response must be an Object", async () => {
    const response = await request(app)
      .post("/news")
      .send({
        ...aNewsObject,
      });
    expect(response.body).toBeInstanceOf(Object);
  });
  test("Should validate the fields name, content and image", async () => {
    const response = await request(app)
      .post("/news")
      .send({ ...anInvalidNewsObject });
    expect(response.statusCode).toBe(400);
    expect(response.body.errors[0].msg).toBeDefined();
  });
  test("Should define 'type' as the category", async () => {
    const response = await request(app)
      .post("/news")
      .send({ ...aNewsObject });
    expect(response.body.type).toBe("news");
  });
});

describe("GET /news/:id", () => {
  let beforeResponse;
  beforeEach(async () => {
    beforeResponse = await request(app)
      .post("/news")
      .send({
        ...aNewsObject,
      });
  });
  afterEach(async () => {
    await request(app).delete(`/news/${beforeResponse.id}`);
  });
  test("Should respond with a 200 using a valid id", async () => {
    const response = await request(app).get(`/news/${beforeResponse.id}`);
    expect(response.statusCode).toBe(200);
  });
  test("Response must be an Object", async () => {
    const response = await request(app).get(`/news/${beforeResponse.id}`);
    expect(response.body).toBeInstanceOf(Object);
  });
});

describe("DELETE /news/:id", () => {
  let beforeResponse;
  beforeEach(async () => {
    beforeResponse = await request(app)
      .post("/news")
      .send({
        ...aNewsObject,
      });
  });
  afterEach(async () => {
    await request(app).delete(`/news/${beforeResponse.id}`);
  });
  test("Should delete a news", async () => {
    const response = await request(app).delete(`/news/${beforeResponse.id}`);
    expect(response.statusCode).toBe(200);
  });
});

describe("PUT /news/:id", () => {
  let beforeResponse;
  beforeEach(async () => {
    beforeResponse = await request(app)
      .post("/news")
      .send({
        ...aNewsObject,
      });
  });
  afterEach(async () => {
    await request(app).delete(`/news/${beforeResponse.id}`);
  });
  test("Should update a news", async (done) => {
    const response = await request(app)
      .put(`/news/${beforeResponse.id}`)
      .send({
        ...aNewsObjectUpdate,
      });
    expect(response.body).toBeInstanceOf(Object);
    expect(response.body.name).toHaveLength(22);
  });
});

describe("GET /news", () => {
  let beforeResponse;
  beforeEach(async () => {
    beforeResponse = await request(app)
      .post("/news")
      .send({
        ...aNewsObject,
      });
  });
  afterEach(async () => {
    await request(app).delete(`/news/${beforeResponse.id}`);
  });
  test("Should respond with a 200", async () => {
    const response = await request(app).get("/news");
    expect(response.statusCode).toBe(200);
  });
  test("response must be an Array of Objects", async () => {
    const response = await request(app).get("/news");
    expect(response.body[0]).toBeDefined();
    expect(response.body[0].name).toBeDefined();
  });
});
