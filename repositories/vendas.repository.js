import Vendas from "../models/vendas.models.js";

async function insertVendas(vendas) {
  try {
    return await Vendas.create(vendas);
  } catch (err) {
    throw err;
  }
}

async function getVendass() {
  try {
    return await Vendas.findAll();
  } catch (err) {
    throw err;
  }
}
async function getVendas(id) {
  try {
    return await Vendas.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteVendas(id) {
  try {
    await Vendas.destroy({
      where: {
        vendaId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateVendas(vendas) {
  try {
    await Vendas.update(vendas, {
      where: {
        vendaId: vendas.vendaId,
      },
    });
    return await getVendas(vendas.vendaId);
  } catch (err) {
    throw err;
  }
}
export default {
  insertVendas,
  getVendas,
  getVendass,
  deleteVendas,
  updateVendas,
};
