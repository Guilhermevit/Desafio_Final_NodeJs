import livrosRepository from "../repositories/livros.repository.js";

async function createLivros(livros) {
  return await livrosRepository.insertLivros(livros);
}

async function getLivros() {
  return await livrosRepository.getLivros();
}

async function getLivross(id) {
  return await livrosRepository.getLivross(id);
}

async function deleteLivros(id) {
  await livrosRepository.deleteLivros(id);
}

async function updateLivros(livros) {
  return await livrosRepository.updateLivros(livros);
}

export default {
  createLivros,
  getLivros,
  getLivross,
  deleteLivros,
  updateLivros,
};
