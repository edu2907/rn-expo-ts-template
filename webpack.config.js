/* eslint-disable */
// @ts-nocheck
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv)

  config.resolve.alias['navigation-react-native$'] =
    'navigation-react-native-web'
  return config
}
