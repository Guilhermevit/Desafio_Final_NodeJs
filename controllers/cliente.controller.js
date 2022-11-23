import clienteRepository from "../repositories/cliente.repository.js";
import clienteService from "../services/cliente.service.js";

async function createCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error(
        "Nome, email, senha, telefone e endereço são obrigatorios"
      );
    }
    res.send(await clienteService.createCliente(cliente));
    logger.info(`POST /cliente - ${JSON.stringify(cliente)}`);
  } catch (err) {
    next(err);
  }
}

async function getClientes(req, res, next) {
  try {
    res.send(await clienteService.getClientes());
    logger.info("GET/cliente");
  } catch (err) {
    next(err);
  }
}

async function getCliente(req, res, next) {
  try {
    res.send(await clienteService.getCliente(req.params.id));
    logger.info("GET/cliente");
  } catch (err) {
    next(err);
  }
}

async function deleteCliente(req, res, next) {
  try {
    await clienteService.deleteCliente(req.params.id);
    res.end();
    logger.info("DELETE/cliente");
  } catch (err) {
    next(err);
  }
}

async function updateCliente(req, res, next) {
  try {
    let cliente = req.body;
    if (
      !cliente.clienteId ||
      !cliente.nome ||
      !cliente.email ||
      !cliente.senha ||
      !cliente.telefone ||
      !cliente.endereco
    ) {
      throw new Error(
        "Nome, id do cliente, email, senha, telefone e endereço são obrigatorios"
      );
    }
    cliente = await clienteService.updateCliente(cliente);
    res.send(cliente);
    logger.info(`PUT /cliente - ${JSON.stringify(cliente)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createCliente,
  getClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
