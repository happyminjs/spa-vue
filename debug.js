const webpack = require('webpack')
const config = require('./webpack.config.js')

debugger
const compiler = webpack(config)
function compilerCallback(err, status) {
  const statusString = status.toString()
  console.log(statusString)
}

compiler.run((err, status) => {
  compilerCallback(err, status)
})