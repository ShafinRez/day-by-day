let users;

export default class UsersDAO {
  static async injectDB(conn) {
    if (users) {
      return;
    }
    try {
      users = await conn.db(process.env.CLUSTER_NAME).collection("customers");
    } catch (e) {
      console.error(
        `Unable to establish a connection handle in usersDAO:, ${e}`
      )
    }
  }
  static async getUsers({ filters = null, page = 0, usersPerPage = 20 } = {}) {
    let query;
    if (filters) {
      if ("name" in filters) {
        query = { $text: { $search: filters["name"] } };
      }
      else if ("username" in filters) {
        query = { $text: { $search: filters["username"] } };
      }
      else if ("email" in filters) {
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
        `Unable to convert sursor to array or problem counting documents, ${e}`
      );
    }
    return { usersList: [], totalNumUsers: 0 };
  }
}
