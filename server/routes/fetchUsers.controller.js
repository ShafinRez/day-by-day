import UsersDAO from "./usersDAO.js"

export default class fetchUserController {
    static async apiAddUser(req, res, next) {
        try {
            const username = req.body.username
            const name = req.body.name
            const email = req.body.email
            const password = req.body.password
            const date = new Date()

            const UserResponse = await UsersDAO.addUser(
                username,
                name,
                email,
                password,
                date,
            )
            res.json({status: "success"})
        } catch (e){
            res.status(500).json({error: e.message})
        }
    }

    // static async apiUpdateUser(req, res, next) {
    //     try{
    //         //do we want users to update? or would this take too much time/varification
    //     }
    // }

    static async apiDeleteUser(req, res, next){
        try {
            //Non-standard to have body in delete request.
            const email = req.body.email
            const password = req.body.password

            const reviewResponse = await UsersDAO.deleteUser(
                email,
                password
            )
            res.json({status: "success"})
        } catch (e) {
            res.status(500).json({error : e.message})
        }
    }
}