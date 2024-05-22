import mysql from "mysql";
import express from "express";
import cors from "cors";
import bcrypt from "bcrypt";

const app = express();

app.use(express.json());
app.use(cors());

const con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "assesment",
});

con.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Connected successfully");
  }
});

app.post("/reg", async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, 10);

    const dataQuery = "INSERT INTO registration SET ?";
    con.query(dataQuery, { name, email, password: hashedPassword }, (err, result) => {
      if (err) {
        console.error("Error inserting data:", err);
        return res.status(500).json({ error: "An error occurred during registration" });
      } else {
        return res.status(200).json("success");
      }
    });
  } catch (err) {
    console.error("Error hashing password:", err);
    return res.status(500).json({ error: "An error occurred during registration" });
  }
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ error: "All fields are required" });
  }

  const query = "SELECT * FROM registration WHERE email = ?";
  con.query(query, [email], async (err, results) => {
    if (err) {
      console.error("Error executing query:", err);
      return res.status(500).json({ error: "An error occurred during login" });
    }
    if (results.length === 0) {
      console.log("No user found with this email.");
      return res.status(401).json("fail");
    }

    const user = results[0];

    try {
      const passwordMatch = await bcrypt.compare(password, user.password);

      if (!passwordMatch) {
        console.log("Incorrect password.");
        return res.status(401).json("fail");
      }

      console.log("Login successful.");
      return res.status(200).json("success");
    } catch (err) {
      console.error("Error comparing passwords:", err);
      return res.status(500).json({ error: "An error occurred during login" });
    }
  });
});

app.post("/savedata", (req, res) => {
  const { reason, type, division, category, priority, department, startDate, endDate, location, projectName, status } = req.body;

  const dataQuery = "INSERT INTO projectdata SET ?";
  con.query(dataQuery, { reason, type, division, category, priority, department, startDate, endDate, location, projectName, status }, (err, result) => {
    if (err) {
      console.error("Error saving data:", err);
      return res.status(500).json("fail");
    } else {
      return res.status(200).json("success");
    }
  });
});

app.get("/projectdata", (req, res) => {
  const dataQuery = "SELECT * FROM projectdata";
  con.query(dataQuery, (err, result) => {
    if (err) {
      console.error("Error fetching data:", err);
      return res.status(500).json("fail");
    } else {
      return res.status(200).json(result);
    }
  });
});

app.post("/updatestatus", (req, res) => {
  const { status, id } = req.body;
  const sql = "UPDATE projectdata SET status = ? WHERE id = ?";
  con.query(sql, [status, id], (error, results) => {
    if (error) {
      console.error("Error updating status:", error);
      return res.status(500).json({ error: "Failed to update status", details: error.message });
    } else {
      return res.status(200).json({ success: true });
    }
  });
});


app.listen(4500, () => {
  console.log("Server is running on port 4500");
});
