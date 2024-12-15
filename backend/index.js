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

app.delete("/delete", (req, res) => {
  const uid = req.query.uid;
  if (!uid) {
    return res.status(400).json({ error: "ID is required" });
  }
  const deleteQuery = `DELETE FROM students WHERE student_uid = ${uid}`;
  db.query(deleteQuery, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      return res.json(result);
    }
  });

  // res.status(200).json({ message: "Item deleted"
});

app.get("/read", (req, res) => {
  const readQuery = "SELECT * FROM students WHERE student_id";
});

// app.put("/edit/:id", (req, res) => {
//   const { id } = req.params;
//   console.log(id);
//   const values = [req.body.name, req.body.email];
//   console.log(values);
//   const editQuery = `UPDATE students SET  student_name = ?, email_id = ?  WHERE student_id = ${id}`;

//   db.query(editQuery, [values], (err, result) => {
//     if (err) {
//       console.log(err);
//     } else {
//       return res.json(result);
//     }
//   });
//   console.log(editQuery);
// });\

app.put("/edit/:id", (req, res) => {
  const { id } = req.params; // Get the id from URL parameters
  console.log(id);

  // Get the values from the request body
  const { name, email } = req.body;
  console.log("Name:", name, "Email:", email);

  // SQL query to update student data
  const editQuery = `
    UPDATE students 
    SET student_name = ?, email_id = ? 
    WHERE student_uid = ?`;

  // Execute the query with individual parameters
  db.query(editQuery, [name, email, id], (err, result) => {
    if (err) {
      console.log(err);
      return res
        .status(500)
        .json({ error: "An error occurred while updating the student" });
    } else {
      console.log("Update result:", result);
      return res
        .status(200)
        .json({ message: "Student updated successfully", result });
    }
  });

  console.log(editQuery);
});

app.listen(PORT, () => {
  console.log(`The port is listening on ${PORT}`);
});
