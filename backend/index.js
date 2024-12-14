import express from "express";
import mysql from "mysql";
import cors from "cors";

const PORT = 8080;

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "crud-nodejs",
});

app.get("/", (req, res) => {
  const sql = "SELECT * FROM students";
  db.query(sql, (err, result) => {
    if (err) {
      return res.json({ Message: "Error inside server" });
    } else {
      return res.json(result);
    }
  });
});

app.post("/addStudent", (req, res) => {
  const sqlQuery = "INSERT INTO students (student_name, email_id) VALUES (?)";
  const values = [req.body.name, req.body.emailId];

  db.query(sqlQuery, [values], (err, result) => {
    if (err) {
      console.error(err);
    } else {
      return res.json(result);
    }
  });
});

app.listen(PORT, () => {
  console.log(`The port is listening on ${PORT}`);
});
