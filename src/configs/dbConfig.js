const sql = require("mssql");

const config = {
  user: "sa_admin",
  password: "Aic34062173",
  server: "prysm-shop-db.c6wmerccfdgz.ap-south-1.rds.amazonaws.com",
  database: "PrysmShopDB",
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
};

const pool = new sql.ConnectionPool(config);

module.exports = {
  sql: sql,
  pool: pool,
};
