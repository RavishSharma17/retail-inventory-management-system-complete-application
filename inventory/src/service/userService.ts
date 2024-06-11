import { userDao } from "../dao/userDao";

export class UserService {
  private userDaoInstance: userDao;

  constructor() {
    this.userDaoInstance = new userDao();
  }

  public createUser(user_id: string, name: string, email: string) {
    this.userDaoInstance.addUser({
      id: user_id,
      name: name,
      email: email
    });
  }

  public getUser(user_id: string) {
    return this.userDaoInstance.getUser(user_id);
  }
}