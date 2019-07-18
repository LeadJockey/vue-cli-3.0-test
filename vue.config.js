const CopyWebpackPlugin = require('copy-webpack-plugin')

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyWebpackPlugin([
        {
          from: './src/assets/graph',
          to: './graph/',
          toType: 'dir',
          ignore: [ "index.html", ".DS_Store" ]
        }
      ])
    ]
  },
  css: {
    loaderOptions: {
      sass: {
        data: `
                    @import "@/assets/styles/_variables.scss";
                    @import "@/assets/styles/_mixins.scss";
                    @import "@/assets/styles/_functions.scss";
                `
      }
    }
  }
}
