const apis = [
]

apis.forEach((api) => {
  module.exports[api] = require(__dirname + '/' + api);
})