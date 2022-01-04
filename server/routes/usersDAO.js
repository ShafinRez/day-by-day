//DAO - Data access object
import mongodb from "mongodb";
const ObjectId = mongodb.ObjectId;

let users;

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db(process.env.CLUSTER_NAME).collection("users");
    } catch (e) {
      console.error(
        `Unable to establish a connection handle in usersDAO:, ${e}`
      );
    }
  }
  static async getUsers({ filters = null, page = 0, usersPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      } else if ("username" in filters) {
        query = { $text: { $search: filters["username"] } };
      } else if ("email" in filters) {
        query = { $text: { $search: filters["email"] } };
      }
    }

    let cursor;

    try {
      cursor = await users.find(query);
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`);
      return { usersList: [], totalNumUsers: 0 };
    }

    const displayCursor = cursor.limit(usersPerPage).skip(usersPerPage * page);

    try {
      const usersList = await displayCursor.toArray();
      const totalNumUsers = await users.countDocuments(query);

      return { usersList, totalNumUsers };
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`
      );
      return { usersList: [], totalNumUsers: 0 };
    }
  }

  static async addUser(username, name, email, password, date) {
    try {
      const reviewDoc = {
        username: username,
        name: name,
        email: email,
        password: password,
        date: date,
      };
      return await users.insertOne(reviewDoc);
    } catch (e) {
      console.error(`Unable to post user: ${e}`);
      return { error: e };
    }
  }

  static async deleteUser(email, password) {
    try {
      const deleteResponse = await users.deleteOne({
        email: email,
        password: password,
      });

      return deleteResponse;
    } catch (e) {
      console.error(`Unable to delete review: ${e}`);
      return { error: e };
    }
  }
}
