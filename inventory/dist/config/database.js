"use strict";
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", { value: true });
var MySql = require('sync-mysql');
var connection = new MySql({
    host: (_a = process.env.DB_HOST) !== null && _a !== void 0 ? _a : 'localhost',
    user: (_b = process.env.DB_USER) !== null && _b !== void 0 ? _b : 'root',
    password: (_c = process.env.DB_PASSWORD) !== null && _c !== void 0 ? _c : 'localhost@root',
    database: (_d = process.env.DB_NAME) !== null && _d !== void 0 ? _d : 'inventory'
});
exports.default = connection;
