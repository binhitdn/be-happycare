const { Sequelize } = require("sequelize");
require("dotenv").config();

const sequelize = new Sequelize(
  "postgres", //
  "postgres", //
  "BonBinhHoa@2003", //
  {
    host: "db.qcencfgwkwrpacekgyqh.supabase.co",
    port: 5432,
    dialect: "postgres",
    logging: false,
    dialectOptions:
      process.env.DB_SSL === "true"
        ? { ssl: { require: true, rejectUnauthorized: false } }
        : {},
    query: {
      raw: true,
    },
  }
);

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
