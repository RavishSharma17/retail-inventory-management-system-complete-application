"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userDao = void 0;
const const_1 = require("../config/const");
const database_1 = __importDefault(require("../config/database"));
class userDao {
    constructor() { }
    addUser(userItem) {
        try {
            database_1.default.query(`INSERT INTO ${const_1.TABLES.USERS} (id, name, email) VALUES (?, ?, ?)`, [userItem.id, userItem.name, userItem.email]);
        }
        catch (err) {
            console.log(err);
        }
    }
    getUser(user_id) {
        try {
            return database_1.default.query(`SELECT * FROM ${const_1.TABLES.USERS} WHERE id = ?`, [user_id]);
        }
        catch (err) {
            console.log(err);
        }
    }
}
exports.userDao = userDao;
