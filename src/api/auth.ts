import client from './client'

export default {
  login: (authInfo: string) => {
    return new Promise((resolve, reject) => {
      client.post('/auth/login', authInfo)
        .then((res: any) => resolve({ token: res.data.token, userId: res.data.userId }))
        .catch((err: any)  => {
          reject(new Error(err.responce.data.message || err.message))
        })
    })
  }
}