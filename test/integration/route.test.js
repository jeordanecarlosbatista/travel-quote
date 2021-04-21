const request = require('supertest');

const app = require('../../src/app');
const config = require('../../src/config');
const truncate = require('../truncate');

let token;

describe('Route', () => {
    beforeEach(async () => {
        const response = await request(app)
            .post('/api/v1/login')
            .send({
                username: config.user.username,
                password: config.user.password,
            });
        token = response.body.token;

        await truncate();
    });

    it("should create route", async () => {
        const response = await request(app)
            .post('/api/v1/route')
            .set('X-API-Key', token)
            .send({
                "from": "BRC",
                "to": "BA",
                "price": 10
            });
        expect(201).toBe(response.status);
    });

    it("should not create route equals", async () => {
        await request(app)
            .post('/api/v1/route')
            .set('X-API-Key', token)
            .send({
                "from": "BRC",
                "to": "BA",
                "price": 10
            });
        const response = await request(app)
            .post('/api/v1/route')
            .set('X-API-Key', token)
            .send({
                "from": "BRC",
                "to": "BA",
                "price": 10
            });
        expect(422).toBe(response.status);
    });
});
