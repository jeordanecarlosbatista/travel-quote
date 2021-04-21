const { user } = require('../config');
const { UnauthorizedException } = require('../exceptions');
const { jwt, errors } = require('../utils');

class LoginService {
  static async generateToken({ username, password }) {
    if (!(username === user.username && password === user.password)) {
      throw new UnauthorizedException(errors.invalidCredentials);
    }
    const token = jwt.sign();
    const decoded = jwt.decode(token);
    return {
      token,
      issuedAt: new Date(new Date(0)).setUTCSeconds(decoded.iat),
      expiresAt: new Date(new Date(0)).setUTCSeconds(decoded.exp),
    };
  }
}

module.exports = LoginService;
