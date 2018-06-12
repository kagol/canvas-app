var path = require('path');
const app = path.join(__dirname, 'apps/creative-machine/src');
const dist = path.join(__dirname, 'apps/creative-machine/dist');
console.log('app path:', app);
module.exports = {
  entry: app + "/js/index.js",
  output: {
    path: dist,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)?$/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
}