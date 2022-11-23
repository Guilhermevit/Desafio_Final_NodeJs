import vendasRepository from "../repositories/vendas.repository.js";
import livrosRepository from "../repositories/livros.repository.js";

async function createVendas(vendas) {
  const livros = await livrosRepository.getLivross(vendas.livroId);
  if (livros.estoque > 0) {
    vendas = await vendasRepository.insertVendas(vendas);
    livros.estoque--;
    await livrosRepository.updateLivros(livros);
    return vendas;
  } else {
    throw new Error("Livro sem estoque");
  }
}

async function getVendass() {
  return await vendasRepository.getVendass();
}

async function getVendas(id) {
  return await vendasRepository.getVendas(id);
}

async function deleteVendas(id) {
  await vendasRepository.deleteVendas(id);
}

async function updateVendas(vendas) {
  return await vendasRepository.updateVendas(vendas);
}

export default {
  createVendas,
  getVendass,
  getVendas,
  deleteVendas,
  updateVendas,
};
