import { createPool } from "mysql2"
import 'dotenv/config.js'

let connection = createPool({
    host: process.env.hostDB,
    database: process.env.nameDB,
    user: process.env.userDB,
    password: process.env.pwdDB,
    multipleStatements: true,
    connectionLimit: 30
})

connection.on('connection', (pool) => {
    if (!pool) throw new Error('couldnt connect to the database, please try again later')
})


export {
    connection
}