const { spec } = require('pactum');

class PetRequest {
  
  // Ação de Criar
  createPet(payload) {
    return spec()
      .post('/pet')
      .withJson(payload);
  }

  // Ação de Buscar por ID
  getPet(id) {
    return spec()
      .get(`/pet/${id}`);
  }

  // Ação de Buscar por Status (Reaproveita o GET, mas com parâmetros)
  getPetByStatus(status) {
    return spec()
      .get('/pet/findByStatus')
      .withQueryParams('status', status);
  }

  // Ação de Deletar
  deletePet(id) {
    return spec()
      .delete(`/pet/${id}`);
  }
}

module.exports = new PetRequest();