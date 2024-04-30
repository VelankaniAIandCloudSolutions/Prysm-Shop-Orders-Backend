const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { sql, pool } = require("./src/configs/dbConfig");
const ordersRouter = require("./src/routes/ordersRoutes");

pool
  .connect()
  .then(() => {
    console.log("Connected to SQL Server");
  })
  .catch((err) => {
    console.error("Error connecting to SQL Server:", err);
  });
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "ok" });
});

app.use("/api/v1/orders/", ordersRouter);

app.listen(port, "0.0.0.0", () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
