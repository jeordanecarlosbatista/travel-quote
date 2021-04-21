const logger = require('tracer').colorConsole();

module.exports = (err, req, res, next) => {
  const code = err.status || 500;
  res.status(code)
    .send({
      code,
      message: err.message,
      error: code === 500
        ? 'Internal Server Error'
        : err.name,
    });
  logger.error(err);
};
