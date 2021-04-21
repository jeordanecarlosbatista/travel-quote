const LoginService = require('../../../src/services/loginService');

describe('Quote Service', () => {
    it('should return jwt token when authenticated', async () => {
        var result = await LoginService.generateToken({ username: process.env.JWT_USERNAME, password: process.env.JWT_PASSWORD });
        expect(result).toHaveProperty("token");
    });
});
