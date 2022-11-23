import Autores from "../models/autores.models.js";

async function insertAutores(autores) {
  try {
    return await Autores.create(autores);
  } catch (err) {
    throw err;
  }
}

async function getAutores() {
  try {
    return await Autores.findAll();
  } catch (err) {
    throw err;
  }
}
async function getAutor(id) {
  try {
    return await Autores.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function deleteAutores(id) {
  try {
    await Autores.destroy({
      where: {
        autorId: id,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function updateAutores(autores) {
  try {
    await Autores.update(autores, {
      where: {
        autorId: autores.autorId,
      },
    });
    return await getAutores(autores.autorId);
  } catch (err) {
    throw err;
  }
}
export default {
  insertAutores,
  getAutores,
  getAutor,
  deleteAutores,
  updateAutores,
};
