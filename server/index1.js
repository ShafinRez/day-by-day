import mongodb from "mongodb";
import dotenv from "dotenv";
import app from "./server.js";
import UsersDAO from "./routes/usersDAO.js"
dotenv.config()
const MongoClient = mongodb.MongoClient

const PORT = process.env.PORT || 8000

MongoClient.connect(
    process.env.CONNECTION_URL, 
    {
        wtimeoutMS: 2500,
        // useNewUrlParse: true
    },
)
.catch(err => {
    console.log(err.stack)
    process.exit(1)
})
.then(async client => {
    await UsersDAO.injectDB(client)
    app.listen(PORT, () => {
        console.log("listening on port:", PORT)
    })
})