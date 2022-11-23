import autoresRepository from "../repositories/autores.repository.js";
import autoresService from "../services/autores.service.js";

async function createAutores(req, res, next) {
  try {
    let autores = req.body;
    if (!autores.nome || !autores.email || !autores.telefone) {
      throw new Error("Nome, email e telefone são obrigatorios");
    }
    res.send(await autoresService.createAutores(autores));
    logger.info(`POST /autores - ${JSON.stringify(autores)}`);
  } catch (err) {
    next(err);
  }
}

async function getAutores(req, res, next) {
  try {
    res.send(await autoresService.getAutores());
    logger.info("GET/autores");
  } catch (err) {
    next(err);
  }
}

async function getAutor(req, res, next) {
  try {
    res.send(await autoresService.getAutor(req.params.id));
    logger.info("GET/autores");
  } catch (err) {
    next(err);
  }
}

async function deleteAutores(req, res, next) {
  try {
    await autoresService.deleteAutores(req.params.id);
    res.end();
    logger.info("DELETE/autores");
  } catch (err) {
    next(err);
  }
}

async function updateAutores(req, res, next) {
  try {
    let autores = req.body;
    if (
      !autores.autorId ||
      !autores.nome ||
      !autores.email ||
      !autores.telefone
    ) {
      throw new Error("Nome,id do autor, email e telefone são obrigatorios");
    }
    autores = await autoresService.updateAutores(autores);
    res.send(autores);
    logger.info(`PUT /autores - ${JSON.stringify(autores)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createAutores,
  getAutores,
  getAutor,
  deleteAutores,
  updateAutores,
};
