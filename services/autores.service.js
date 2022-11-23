import autoresRepository from "../repositories/autores.repository.js";

async function createAutores(autores) {
  return await autoresRepository.insertAutores(autores);
}

async function getAutores() {
  return await autoresRepository.getAutores();
}

async function getAutor(id) {
  return await autoresRepository.getAutor(id);
}

async function deleteAutores(id) {
  await autoresRepository.deleteAutores(id);
}

async function updateAutores(autores) {
  return await autoresRepository.updateAutores(autores);
}

export default {
  createAutores,
  getAutores,
  getAutor,
  deleteAutores,
  updateAutores,
};
