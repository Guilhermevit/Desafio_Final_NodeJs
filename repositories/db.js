import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://seufalfi:NGA1axF0txiuj-5Qo0_Ck-C0rHAFmCPT@babar.db.elephantsql.com/seufalfi",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
