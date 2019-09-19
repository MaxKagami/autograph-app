import axios from 'axios'
import configs from '../../configs'
const baseURL = `${configs.backendUrl}/api/v1`
export default function (resource) {
  return axios.create({
    baseURL
    // In case that you need a token:
    // headers: { "Authorization": "Bearer yourToken" }
  })
    .get(`${resource}`)
}
