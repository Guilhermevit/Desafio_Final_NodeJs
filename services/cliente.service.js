import clienteRepository from "../repositories/cliente.repository.js";

async function createCliente(cliente) {
  return await clienteRepository.insertCliente(cliente);
}

async function getClientes() {
  return await clienteRepository.getClientes();
}

async function getCliente(id) {
  return await clienteRepository.getCliente(id);
}

async function deleteCliente(id) {
  await clienteRepository.deleteCliente(id);
}

async function updateCliente(cliente) {
  return await clienteRepository.updateCliente(cliente);
}

export default {
  createCliente,
  getClientes,
  getCliente,
  deleteCliente,
  updateCliente,
};
