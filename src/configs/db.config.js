const sql = require("mssql");

const config = {
  user: "sa_admin",
  password: "Aic34062173",
  server: "prysm-shop-db.c6wmerccfdgz.ap-south-1.rds.amazonaws.com",
  database: "PrysmShopDB",
  // options: {
  //     encrypt: true
  // }
};

const pool = new sql.ConnectionPool(config);

pool
  .connect()
  .then(() => {
    console.log("Connected to SQL Server");
  })
  .catch((err) => {
    console.error("Error connecting to SQL Server:", err);
  });

module.exports = db;
