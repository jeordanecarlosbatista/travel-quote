const request = require("supertest");

const app = require("../../src/app");
const config = require('../../src/config');

describe("Authentication", () => {
    it("should authenticate with valid credentials", async () => {
        const response = await request(app)
            .post("/api/v1/login")
            .send({
                username: config.user.username,
                password: config.user.password,
            });

        expect(response.status).toBe(200);
    });

    it("should not authenticate with invalid credentials", async () => {
        const response = await request(app)
            .post("/api/v1/login")
            .send({
                username: 'test',
                password: "test_31354351351"
            });

        expect(response.status).toBe(401);
    });

    it("should return jwt token when authenticated", async () => {
        const response = await request(app)
            .post("/api/v1/login")
            .send({
                username: config.user.username,
                password: config.user.password,
            });

        expect(response.body).toHaveProperty("token");
    });
});
