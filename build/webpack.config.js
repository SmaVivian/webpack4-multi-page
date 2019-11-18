const path = require('path');

module.exports = {
  entry: './src/main/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};