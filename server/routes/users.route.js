import express from "express";
import UsersCtrl from "./users.controller.js"
import fetchUsersCtrl from "./fetchUsers.controller.js"

const router = express.Router()

router.route("/").get(UsersCtrl.apiGetUsers)

router
    .route("/users")
    .post(fetchUsersCtrl.apiAddUser)
    .delete(fetchUsersCtrl.apiDeleteUser)

export default router