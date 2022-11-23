import LivrosRepository from "../repositories/livros.repository.js";
import LivrosService from "../services/livros.service.js";

async function createLivros(req, res, next) {
  try {
    let livros = req.body;
    if (!livros.estoque || !livros.autorId || !livros.nome || !livros.valor) {
      throw new Error("Autor ID, nome, valor e estoque são obrigatorios");
    }
    res.send(await LivrosService.createLivros(livros));
    logger.info(`POST /livros - ${JSON.stringify(livros)}`);
  } catch (err) {
    next(err);
  }
}

async function getLivros(req, res, next) {
  try {
    res.send(await LivrosService.getLivros(req.params.id));
    logger.info("GET/livros");
  } catch (err) {
    next(err);
  }
}

async function getLivross(req, res, next) {
  try {
    res.send(await LivrosService.getLivross(req.params.id));
    logger.info("GET/livros");
  } catch (err) {
    next(err);
  }
}

async function deleteLivros(req, res, next) {
  try {
    await LivrosService.deleteLivros(req.params.id);
    res.end();
    logger.info("DELETE/livros");
  } catch (err) {
    next(err);
  }
}

async function updateLivros(req, res, next) {
  try {
    let livros = req.body;
    if (
      !livros.livroId ||
      !livros.estoque ||
      !livros.autorId ||
      !livros.nome ||
      !livros.valor
    ) {
      throw new Error(
        "Livro ID, autor ID, nome, valor e estoque são obrigatorios"
      );
    }
    livros = await LivrosService.updateLivros(livros);
    res.send(livros);
    logger.info(`PUT /livros - ${JSON.stringify(livros)}`);
  } catch (err) {
    next(err);
  }
}

export default {
  createLivros,
  getLivros,
  getLivross,
  deleteLivros,
  updateLivros,
};
