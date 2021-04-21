const fs = require('fs');
const path = require('path');


module.exports = async () => {
    fs.writeFileSync(path.resolve('src', 'utils', process.env.ROUTE_DATA_FILENAME),
        `GRU,BRC,10\nGRU,SCL,18\nGRU,ORL,56\nGRU,CDG,75\nSCL,ORL,20\nBRC,SCL,5\nORL,CDG,5`);
}