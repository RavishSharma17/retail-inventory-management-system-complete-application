var MySql = require('sync-mysql');

var connection = new MySql({
    host: process.env.DB_HOST ?? 'localhost',
    user: process.env.DB_USER ?? 'root',
    password: process.env.DB_PASSWORD ?? 'localhost@root',
    database: process.env.DB_NAME ?? 'inventory'
});

export default connection;