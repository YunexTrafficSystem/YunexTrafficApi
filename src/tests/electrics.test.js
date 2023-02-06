const { spec, request } = require('pactum')
const { faker } = require('@faker-js/faker')

request.setBaseUrl('http://localhost:8088') // URL de la API


// Usuario de laboratorio
const user = {
  email: 'lab22@email.com',
  password: 'lab2022'
}

const newElectric = {
  serial: faker.datatype.number({ min: 100000, max: 999999 }),
  project_name: faker.internet.userName(),
  module_type: faker.lorem.words(2),
  color: faker.color.human(),
  entry_diagnostic: faker.lorem.paragraph(),
  initial_displacement: faker.datatype.number({ max: 100 }),
  power: faker.datatype.number({ max: 100 }),
  voltage: faker.datatype.number({ max: 100 }),
  current: faker.datatype.number({ max: 100 }),
  testing_date: faker.date.recent(),
  tested_date: faker.date.soon()
}

const update = {
  color: faker.color.human()
}

describe('Electrics', () => {

  it('Crea un elemento en electricos', async () => {
    // Obtener el token del usuario
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .post('/api/electrics')
      .withHeaders('Authorization', `Bearer ${token}`)
      .withBody(newElectric)
      .expectStatus(201)
  })

  it('Obtiene todos los electricos', async () => {
    // Obtener el token del usuario
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .get('/api/electrics')
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200)
  })

  it('Obtiene un elemento de electricos', async () => {
    // Obtener el token del usuario
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')
    await spec()
      .get(`/api/electrics/${newElectric.serial}`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200)
  })

  it('Actualiza un elemento en electricos', async () => {
    // Obtener el token del usuario
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')
    await spec()
      .put(`/api/electrics/${newElectric.serial}`)
      .withBody(update)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(204)
  })

  it('Elimina un elemento de electrics', async () => {
    // Obtener el token del usuario
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .delete(`/api/electrics/${newElectric.serial}`)
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(204)
  })
})
