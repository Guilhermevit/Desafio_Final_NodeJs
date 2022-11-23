import vendasRepository from "../repositories/vendas.repository.js";
import vendasService from "../services/vendas.service.js";

async function createVendas(req, res, next) {
  try {
    let vendas = req.body;
    if (!vendas.valor || !vendas.data || !vendas.clienteId || !vendas.livroId) {
      throw new Error("Valor, data, cliente ID e Livro Id são obrigatorios");
    }
    res.send(await vendasService.createVendas(vendas));
    logger.info(`POST /vendas - ${JSON.stringify(vendas)}`);
  } catch (err) {
    next(err);
  }
}

async function getVendass(req, res, next) {
  try {
    res.send(await vendasService.getVendass());
    logger.info("GET/vendas");
  } catch (err) {
    next(err);
  }
}

async function getVendas(req, res, next) {
  try {
    res.send(await vendasService.getVendas(req.params.id));
    logger.info("GET/vendas");
  } catch (err) {
    next(err);
  }
}

async function deleteVendas(req, res, next) {
  try {
    await vendasService.deleteVendas(req.params.id);
    res.end();
    logger.info("DELETE/vendas");
  } catch (err) {
    next(err);
  }
}

async function updateVendas(req, res, next) {
  try {
    let vendas = req.body;
    if (
      !vendas.vendaId ||
      !vendas.valor ||
      !vendas.data ||
      !vendas.clienteId ||
      !vendas.livroId
    ) {
      throw new Error(
        "Valor, Venda ID,  data, cliente ID e Livro Id são obrigatorios"
      );
    }
    vendas = await vendasService.updateVendas(vendas);
    res.send(vendas);
    logger.info(`PUT /vendas - ${JSON.stringify(vendas)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createVendas,
  getVendass,
  getVendas,
  deleteVendas,
  updateVendas,
};
