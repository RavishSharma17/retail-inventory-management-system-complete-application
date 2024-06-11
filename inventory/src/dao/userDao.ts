import {TABLES} from '../config/const';
import connection from "../config/database";
import UserModel from "../models/userModel";

export class userDao {
    constructor() { }

    public addUser(userItem: UserModel) {
        try{
            connection.query(`INSERT INTO ${TABLES.USERS} (id, name, email) VALUES (?, ?, ?)`, [userItem.id, userItem.name, userItem.email]);
        } catch(err) {
            console.log(err);
        }
    }

    public getUser(user_id: string) {
        try{
            return connection.query(`SELECT * FROM ${TABLES.USERS} WHERE id = ?`, [user_id]);
        } catch(err) {
            console.log(err);
        }
    }
}