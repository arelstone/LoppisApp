import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://192.168.10.10/api'
  })

  export default httpClient;