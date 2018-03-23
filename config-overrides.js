/* config-overrides.js */

const rewireEmotion = require('react-app-rewire-emotion')

module.exports = function override(config, env) {
  return rewireEmotion(config, env, { inline: true });
}

// module.exports = function override(config, env) {
//   //do stuff with the webpack config...

//   return config
// }