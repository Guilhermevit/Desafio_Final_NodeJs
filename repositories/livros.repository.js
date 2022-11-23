import Livros from "..//models/livros.models.js";

async function insertLivros(livros) {
  try {
    return await Livros.create(livros);
  } catch (err) {
    throw err;
  }
}

async function getLivros() {
  try {
    return await Livros.findAll();
  } catch (err) {
    throw err;
  }
}
async function getLivross(id) {
  try {
    return await Livros.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteLivros(id) {
  try {
    await Livros.destroy({
      where: {
        livroId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateLivros(livros) {
  try {
    await Livros.update(
      {
        nome: livros.nome,
        valor: livros.valor,
        estoque: livros.estoque,
        autorId: livros.autorId,
      },
      {
        where: {
          livroId: livros.livroId,
        },
      }
    );
    return await getLivross(livros.livroId);
  } catch (err) {
    throw err;
  }
}

export default {
  insertLivros,
  getLivros,
  getLivross,
  deleteLivros,
  updateLivros,
};
