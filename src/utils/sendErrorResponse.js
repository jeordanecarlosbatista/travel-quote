const logger = require('tracer').colorConsole();
const { StatusCodes, getReasonPhrase } = require('http-status-codes');
const { UnauthorizedException, UnprocessableEntityException, NotFoundException } = require('../exceptions');
const errors = require('./errors');

module.exports = (err, res) => {
  const apiError = {
    code: StatusCodes.INTERNAL_SERVER_ERROR,
    message: errors.internalError,
    error: getReasonPhrase(StatusCodes.INTERNAL_SERVER_ERROR),
  };
  if (err instanceof UnauthorizedException) {
    apiError.code = StatusCodes.UNAUTHORIZED;
    apiError.message = err.message;
    apiError.error = getReasonPhrase(StatusCodes.UNAUTHORIZED);
  } else if (err instanceof UnprocessableEntityException) {
    apiError.code = StatusCodes.UNPROCESSABLE_ENTITY;
    apiError.message = err.message;
    apiError.error = getReasonPhrase(StatusCodes.UNPROCESSABLE_ENTITY);
  } else if (err instanceof NotFoundException) {
    apiError.code = StatusCodes.NOT_FOUND;
    apiError.message = err.message;
    apiError.error = getReasonPhrase(StatusCodes.NOT_FOUND);
  }

  logger.log(err);
  return res.status(apiError.code).send(apiError);
};
