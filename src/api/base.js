import axios from 'axios'
import URL from '../utils/URL'

const instance = axios.create({
  baseURL: URL,
})

export default instance
