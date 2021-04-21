const jwt = require('jsonwebtoken');
const { user } = require('../config');

class JsonWebToken {
  static async verify(token) {
    try {
      jwt.verify(token, user.cert);
      return true;
    } catch (err) {
      return false;
    }
  }

  static sign() {
    const token = jwt.sign(
      { user: user.username },
      user.cert,
      { expiresIn: '1d' },
    );
    return token;
  }

  static decode(token) {
    const decoded = jwt.decode(token);
    return decoded;
  }
}

module.exports = JsonWebToken;
