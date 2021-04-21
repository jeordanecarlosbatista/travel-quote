const fs = require('fs');
const path = require('path');

class QuoteService {
    static async findCheaperRoute({ from, to }) {
        let data = fs.readFileSync(path.resolve('src', 'utils', 'routes.csv'), 'utf-8');
        let fromOptions = data.split('\n').filter((val) => val.split(',')[0] === from).map((val) => val.split(','));
        let toOptions = data.split('\n').filter((val) => val.split(',')[1] === to).map((val) => val.split(','));

        let routes = [];
        fromOptions.forEach(elem => {
            if (elem[0] === from && elem[1] === to) {
                routes.push(`${elem[0]},${elem[1]},${elem[2]}`);
            } else {
                var toAux = toOptions.find((val) => val[1] === to && val[0] === elem[1]);
                if (typeof toAux !== 'undefined')
                    routes.push(`${elem[0]},${toAux[0]},${toAux[1]},${parseInt(elem[2]) + parseInt(toAux[2])}`);
            }
        });
        var cheapRoute = routes.map((val) => val.split(','))
            .sort((prev, curr) => prev[prev.length - 1] - curr[curr.length - 1])[0];
        return {
            "route": cheapRoute.splice(0, cheapRoute.length - 1).join(","),
            "price": parseInt(cheapRoute[cheapRoute.length - 1])
        };
    }
}

module.exports = QuoteService;