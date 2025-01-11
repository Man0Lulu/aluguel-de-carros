import express from "express";
import conn from "./db/conn.js"

const app = express();

app.use(
    express.urlencoded({
        extend: true,
    })
)

conn
 .sync()
 .then(() => {
    app.listen(3000)
 })
 .catch((err) => console.log(err))