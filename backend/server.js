const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mfc_2024",
});

app.get("/", (re, res) => {
  return res.json("From backend side");
});

app.get("/wfsc_public_votes", (req, res) => {
  const sql = "SELECT * FROM wfsc_public_votes";
  db.query(sql, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(8081, () => {
  console.log("listening");
});
