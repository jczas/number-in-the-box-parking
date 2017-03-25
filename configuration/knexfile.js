var connectionstring = require('../util/connectionstring');

module.exports = {
    client: 'mssql',
    connection: connectionstring.parseConnectionString(process.env.defaultConnection),
}

