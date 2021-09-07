const registerRouter = require('./backend/router')
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        data: `@import "@/assets/scss/variable.scss";`
      }
    }
  },
  devServer: {
    before(app){
      registerRouter(app)
    }
  }
}