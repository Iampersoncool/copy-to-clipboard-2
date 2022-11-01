const path = require('path')

module.exports = {
  mode: 'production',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  },

  optimization: {
    minimize: true,

  },

}