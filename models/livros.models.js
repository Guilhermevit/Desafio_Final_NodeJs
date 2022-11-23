import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Autores from "./autores.models.js";

const Livros = db.define(
  "livros",
  {
    livroId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    nome: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    valor: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    estoque: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  { underscored: true }
);

Livros.belongsTo(Autores, { foreignKey: "autorId" });

export default Livros;
