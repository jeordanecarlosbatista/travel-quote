const { StatusCodes } = require('http-status-codes');

const { sendErrorResponse } = require('../utils');
const RouteService = require('../services/routeService');

class RouteController {
    static async postRoute(req, res) {
        try {
            let result = await RouteService.add(req.body);
            res.status(StatusCodes.CREATED).send(result);
        } catch (err) {
            sendErrorResponse(err, res);
        }
    }
}

module.exports = RouteController;
