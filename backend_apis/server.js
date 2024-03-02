const express = require("express")
const app = express();
const dotenv = require("dotenv");
const mysql = require("mysql2");
const cors = require("cors");

dotenv.config({ path: "./configs/config.env" });
const PORT = process.env.SERVER_PORT;
const server_env = process.env.SERVER_ENV;

//custom imports for server
const { getPool } = require("./configs/database_config.js");

//Router imports
const doctorsRouter = require("./routers/doctors.js");
const pools = require("./configs/database_config.js");

app.listen(PORT, () => {
    console.log(`Listening at PORT ${PORT}`);
})

app.use("/:company/doctors", (req, res, next) => {
    req.company = req.params.company;
    next();
})
app.use(cors())
app.use("/:company/doctors/", doctorsRouter);

app.get("/", async (req, res) => {
    let pool = getPool("cintal", pools);

    pool.getConnection((err, connection) => {
        if (err) return console.log(err);
        const arr = connection.query("SHOW TABLES;", (err, data) => {
            if (err) return res.send(err);
            console.log(data);
            connection.release();
            res.send(data);
        })
    })
})
