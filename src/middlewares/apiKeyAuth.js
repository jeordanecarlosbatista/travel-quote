const { jwt } = require('../utils');

module.exports = async (req) => {
  const token = req.headers['x-api-key'];
  const decoded = jwt.decode(token);
  if (decoded) {
    return true;
  }
  return false;
};
