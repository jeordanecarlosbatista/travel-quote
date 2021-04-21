const fs = require('fs');
const path = require('path');

const expection = require('../exceptions');
const config = require('../config');

class RouteService {
    static async add({ from, to, price }) {
        let data = fs.readFileSync(path.resolve('src', 'utils', 'routes.csv'), 'utf-8');

        if (data.split('\n').includes(`${from},${to},${price}`))
            throw new expection.UnprocessableEntityException('route already exists');

        fs.appendFileSync(path.resolve('src', 'utils', config.data.route_data_filename), `\n${from},${to},${price}`);
        return { from, to, price };
    }
}

module.exports = RouteService;