// Login Strapi
import axios from './base'

async function login({ email, password }) {
  const response = axios
    .post('/auth/local', {
      identifier: email,
      password,
    })
    .catch((error) => console.log(error))

  return response
}

export default login
