const request = require('supertest');

const app = require('../../src/app');
const config = require('../../src/config');
let token;

describe('Travel Quote', () => {
    beforeEach(async () => {
        const response = await request(app)
            .post('/api/v1/login')
            .send({
                username: config.user.username,
                password: config.user.password,
            });
        token = response.body.token;
    });

    it("should return cheaper route", async () => {
        const response = await request(app)
            .get('/api/v1/quote/GRU/SCL')
            .set('X-API-Key', token);
        var expectedResult = {
            "route": "GRU,BRC,SCL",
            "price": 15
        };
        expect(response.body).toMatchObject(expectedResult);
    });
});
