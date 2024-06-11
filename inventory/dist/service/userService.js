"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserService = void 0;
const userDao_1 = require("../dao/userDao");
class UserService {
    constructor() {
        this.userDaoInstance = new userDao_1.userDao();
    }
    createUser(user_id, name, email) {
        this.userDaoInstance.addUser({
            id: user_id,
            name: name,
            email: email
        });
    }
    getUser(user_id) {
        return this.userDaoInstance.getUser(user_id);
    }
}
exports.UserService = UserService;
