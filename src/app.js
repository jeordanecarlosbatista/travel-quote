const { resolve } = require('path');
const fs = require('fs');
const express = require('express');
const swaggerUI = require('swagger-ui-express');
const jsyaml = require('js-yaml');
const openApiValidator = require('express-openapi-validator');
const cors = require('cors');
const helmet = require('helmet');
const { json, urlencoded } = require('body-parser');
const { apiKeyAuth, bearerAuth, apiErrorValidators } = require('./middlewares');
const { loginRoute, quoteRoute, routeRoute } = require('./routes');

class App {
  constructor() {
    this.app = express();
    this.setup();
  }

  setup() {
    this.app.use(cors());
    this.app.use(helmet());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));

    const apiSpec = resolve(__dirname, 'doc.yaml');

    this.app.use('/docs', swaggerUI.serve, swaggerUI.setup(jsyaml.safeLoad(fs.readFileSync(apiSpec, 'utf-8'))));
    this.app.use(
      openApiValidator.middleware({
        apiSpec,
        validateRequests: true,
        validateResponses: false,
        validateSecurity: {
          handlers: {
            ApiKeyAuth: apiKeyAuth,
            bearerAuth,
          },
        },
      }),
    );

    this.app.use('/api/v1', loginRoute);
    this.app.use('/api/v1', quoteRoute);
    this.app.use('/api/v1', routeRoute);

    this.app.use(apiErrorValidators);
  }

  instance() {
    return this.app;
  }
}

const app = new App().instance();

module.exports = app;
