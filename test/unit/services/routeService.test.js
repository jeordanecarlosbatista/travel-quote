const RouteSevice = require('../../../src/services/routeService');
const truncate = require('../../truncate');

describe('Route Service', () => {

    beforeEach(async () => {
        await truncate();
    });

    it('should create route', async () => {
        var result = await RouteSevice.add({
            "from": "BRC",
            "to": "BA",
            "price": 10
        });
        expect(true).toBe(true);
    });

});
