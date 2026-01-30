const petRequest = require('../requests/pet.request');
const petData = require('../data/pet-payload.json');
const { expect, response } = require('pactum');
const { setup } = require('../settings');

setup();
describe('Pet Shop Lifecycle', () => {

  it('Create new pet', async () => {
    const response = petRequest.createPet(petData);
    await response.expectStatus(200)
    .expectJson('id', petData.id)
    .expectJsonLike({
      "name": petData.name,
      "status": petData.status
    });
  })
  it('Verify Created Pet', async () => {
    const petResponse = petRequest.getPet(petData.id)
    await petResponse.expectStatus(200)
    .expectJson('id', petData.id)
    .expectJsonLike({
      "name": petData.name,
      "status": petData.status});
  });

  it('Delete Created Pet', async () => {
    const deleteResponse = petRequest.deletePet(petData.id);
    await deleteResponse.expectStatus(200)
    .expectJson('type', 'unknown')
    .expectJson('message', petData.id.toString());
  });
});