import Sequelize from "sequelize";
import db from "../repositories/db.js";
import Cliente from "./cliente.models.js";
import Livros from "./livros.models.js";

const Vendas = db.define(
  "vendas",
  {
    vendaId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    valor: {
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    data: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  },
  { underscored: true }
);

Vendas.belongsTo(Cliente, { foreignKey: "clienteId" });
Vendas.belongsTo(Livros, { foreignKey: "livroId" });

export default Vendas;
