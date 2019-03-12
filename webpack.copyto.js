const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')

const dest = path.join(__dirname, '..', 'app/webroot/vue-integration/widgets')
console.warn('DESTINATION:', dest)

module.exports = {
  entry: ['./src/nothing.js'],
  plugins: [
    new CopyWebpackPlugin([{
      from: path.join(__dirname, 'dist/getCityData.umd.js'),
      to: dest
    }])
  ]
}