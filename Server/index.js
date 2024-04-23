const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();

app.use(express.json({ limit: "300mb" }));
app.use(express.urlencoded({ limit: "300mb", extended: true }));

app.use(cors());

const con = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "e-shop",
});

// Admin Login

app.post("/adminlogin", (req, res) => {
    const admin_name = req.body.admin_name;
    const admin_password = req.body.admin_password;

    con.query(
        "SELECT * FROM admin WHERE admin_name = ? AND admin_password = ? ",
        [admin_name, admin_password],
        (err, result) => {
            if (err) {
                console.log(err);
            } else {
                if (result.length > 0) {
                    res.send(result);
                } else {
                    res.send({ message: "Wrong adminname or password" });
                }
            }
        }
    );
});

// server
app.listen(3001, () => {
    console.log("running backed server");
});
