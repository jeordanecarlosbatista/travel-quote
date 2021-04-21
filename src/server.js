const logger = require('tracer').colorConsole();
const http = require('http');
const app = require('./app');
const config = require('./config');

http.createServer(app)
  .listen(config.server.port, () => logger.info(`Server Http is running at port ${config.server.port}. ENV ${config.env}`));