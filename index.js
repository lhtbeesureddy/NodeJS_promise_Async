const express = require("express");

const app = express();

app.get("/", (req, res) => {
  let user = req.query.name;

  let promise = new Promise((resolve, reject) => {
    if (user !== undefined && user !== "") {
      resolve("Hello " + user + ", nice to see u here");
    } else {
      reject("Invalid User");
    }
  });

  promise
    .then((response) => {
      res.status(200).json({ Success: response });
    })
    .catch((err) => {
      res.status(400).json({ error: ` ${err}` });
    });
});

app.listen(4000, () => {
  console.log("Server is running at http://localhost:4000");
});