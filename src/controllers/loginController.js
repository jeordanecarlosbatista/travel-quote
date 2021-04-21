const { StatusCodes } = require('http-status-codes');
const { loginService } = require('../services');
const { sendErrorResponse } = require('../utils');

class LoginController {
  static async postLogin(req, res) {
    try {
      const result = await loginService.generateToken(req.body);
      res.status(StatusCodes.OK).send(result);
    } catch (err) {
      sendErrorResponse(err, res);
    }
  }
}

module.exports = LoginController;
