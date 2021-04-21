const dotenv = require('dotenv');

if (process.env.NODE_ENV === 'production') {
  dotenv.config({ path: '.env' });
} else {
  dotenv.config({ path: '.env.dev' });
}

module.exports = {
  env: process.env.ENV,
  server: {
    host: process.env.SERVER_HOST,
    port: process.env.SERVER_PORT,
    ssl: process.env.SERVER_SSL === 'true',
    port_ssl: process.env.SERVER_PORT_SSL,
  },
  user: {
    username: process.env.JWT_USERNAME,
    password: process.env.JWT_PASSWORD,
    cert: process.env.JWT_CERT,
  },
  data: {
    route_data_filename: process.env.ROUTE_DATA_FILENAME
  }
};
