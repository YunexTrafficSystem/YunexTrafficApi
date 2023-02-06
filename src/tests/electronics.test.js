const { spec, request } = require('pactum')
const { faker } = require('@faker-js/faker')

request.setBaseUrl('http://localhost:8088') // URL de la API

// Usuario de laboratorio
const user = {
  email: 'lab22@email.com',
  password: 'lab2022'
}

const newElectronic = {
  serial: faker.datatype.number({ min: 100000, max: 999999 }),
  project_name: faker.lorem.word(5),
  module_name: faker.lorem.word(5),
  controller_type: faker.lorem.word(5),
  entry_diagnostic: faker.lorem.paragraph(),
  component: {
    comp_type: faker.lorem.word(5),
    comp_quant: faker.datatype.number({ min: 1, max: 50 })
  },
  owner: user.username,
  dates: {
    testing_date: faker.date.recent(),
    tested_date: faker.date.soon()
  }
}

const newUpdate = {
  component: {
    comp_type: faker.lorem.word(),
    comp_quant: faker.datatype.number({ min: 1, max: 50 })
  }
}

describe('Electronics', () => {
  it('Debe de crear un electronico', async () => {
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .post('/api/electronics')
      .withHeaders('Authorization', `Bearer ${token}`)
      .withBody(newElectronic)
      .expectStatus(201)
  })

  it('Debe actualizar un electrónico', async () => {
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .put(`/api/electronics/${newElectronic.serial}`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .withBody(newUpdate)
      .expectStatus(204)
  })

  it('Debe listar todos los electrónicos', async () => {
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .get('/api/electronics')
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200)
  })

  it('Debe lista un electrónico', async () => {
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .get('/api/electronics')
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200)
  })

  it('Debe de eliminar un electrónico', async () => {
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .delete(`/api/electronics/${newElectronic.serial}`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(204)
  })
})
