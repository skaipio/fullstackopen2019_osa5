import axios from 'axios'
import loginService from './login'
const baseUrl = '/api/blogs'

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = async blog => {
  const response = await axios.post(baseUrl, blog, {
    headers: {
      'Authorization': `Bearer ${loginService.getUser().token}`
    }
  })
  return response.data
}
export default { create, getAll }
