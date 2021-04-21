const { jwt } = require('../utils');
const { user } = require('../config');

module.exports = async (req) => {
  const token = req.headers.authorization;
  if (token) {
    const bearer = token.split(' ').pop();
    const tokenValid = await jwt.verify(bearer, user.cert);
    return tokenValid;
  }
  return false;
};
