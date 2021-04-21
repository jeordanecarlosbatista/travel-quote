const QuoteService = require('../../../src/services/quoteService');

describe('Quote Service', () => {
    it('should return cheaper route', async () => {
        var result = await QuoteService.findCheaperRoute({ from: 'GRU', to: 'SCL' });
        var expectedResult = {
            "route": "GRU,BRC,SCL",
            "price": 15
        };
        expect(result).toMatchObject(expectedResult)
    });

});
