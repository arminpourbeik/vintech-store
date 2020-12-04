import axios from 'axios'
import URL from '../utils/URL'

export default axios.create({
  baseURL: URL,
})
