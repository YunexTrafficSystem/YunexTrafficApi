const { spec, request } = require('pactum')
const { faker } = require('@faker-js/faker')

request.setBaseUrl('http://localhost:8088') // URL de la API

const user = {
  email: faker.internet.email(),
  password: faker.internet.password(10)
}

describe('User', () => {
  it('Crear un usuario', async () => {
    await spec()
      .post('/singup')
      .withBody(user)
      .expectStatus(201)
  })

  it('Iniciar sesión', async () => {
    await spec()
      .post('/singin')
      .withBody(user)
      .stores('myToken', 'token')
      .expectStatus(200)
  })

  it('Listar todos los usuarios sin TOKEN', async () => {
    await spec()
      .get('/users')
      .expectStatus(401)
  })
  it('Listar todos los usuarios con TOKEN', async () => {
    // Obtener el token del usuario
    const { token } = await spec()
      .post('/singin')
      .withBody(user)
      .expectStatus(200)
      .returns('{ token }')

    await spec()
      .get('/users')
      .withHeaders('Authorization', `Bearer ${token}`)
      .expectStatus(200)
  })
})
