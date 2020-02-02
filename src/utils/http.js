const axios = require('axios')

const http = axios.create({
  baseURL: 'https://view.inews.qq.com/g2'
})

export default http