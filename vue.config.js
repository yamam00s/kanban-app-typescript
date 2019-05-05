const backend = require('./dev-serve');

module.exports = {
  // ...
  devServer: {
    proxy: {
      // apiで始まるリクエストを`api yourservice.com`にプロキシする
      '/api': {
        target: 'http:api.yourservice.com',
        changeOrigin: true,
        pathRewite: {
          '^/api': ''
        }
      }
    },
    before: backend
  }
}