// Register Strapi
import axios from './base'

async function register({ email, password, username }) {
  const response = axios
    .post('/auth/local/register', {
      email,
      password,
      username,
    })
    .catch((error) => console.log(error))

  return response
}

export default register
