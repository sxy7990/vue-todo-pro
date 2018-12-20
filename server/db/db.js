// sha1：帮助生成请求线上数据库的签名
const sha1 = require('sha1')
const axios = require('axios')

// 线上数据库有命名空间，每个请求都要带上
const className = 'todo'

const request = axios.create({
  baseURL: 'https://d.apicloud.com/mcm/api'
})

// 错误信息
const createError = (code, resp) => {
  const err = new Error(resp.message)
  err.code = code
  return err
}

// 处理请求返回的内容
const handleRequest = ({ status, data, ...rest }) => {
  if (status === 200) {
    return data
  } else {
    throw createError(status, rest)
  }
}

module.exports = (appId, appKey) => {
  // 访问线上数据库的时候需要的两个头信息
  const getHeaders = () => {
    const now = Date.now()
    return {
      'X-APICloud-AppId': appId,
      'X-APICloud-AppKey': `${sha1(`${appId}UZ${appKey}UZ${now}`)}.${now}`
    }
  }
  return {
    // 获取所有的todo列表
    async getAllTodos () {
      return handleRequest(await request.get(`/${className}`, {
        headers: getHeaders()
      }))
    },
    async addTodo (todo) {
      return handleRequest(await request.post(
        `/${className}`,
        todo,
        { headers: getHeaders() }
      ))
    },
    async updateTodo (id, todo) {
      return handleRequest(await request.put(
        `/${className}/${id}`,
        todo,
        { headers: getHeaders() }
      ))
    },
    async deleteTodo (id) {
      return handleRequest(await request.delete(
        `/${className}/${id}`,
        { headers: getHeaders() }
      ))
    },
    async deleteCompleted (ids) {
      const requests = ids.map(id => {
        return {
          method: 'DELETE',
          path: `/mcm/api/${className}/${id}`
        }
      })
      return handleRequest(await request.post(
        '/batch',
        { requests },
        { headers: getHeaders() }
      ))
    }
  }
}
