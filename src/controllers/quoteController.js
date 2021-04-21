const { StatusCodes } = require('http-status-codes');

const { sendErrorResponse } = require('../utils');
const QuoteService = require('../services/quoteService');

class QuoteController {
    static async getQuoteFromTo(req, res) {
        try {
            let result = await QuoteService.findCheaperRoute({ from: req.params.from, to: req.params.to });
            res.status(StatusCodes.OK).send(result);
        } catch (err) {
            sendErrorResponse(err, res);
        }
    }
}

module.exports = QuoteController;
