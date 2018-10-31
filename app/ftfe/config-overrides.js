const { injectBabelPlugin } = require('react-app-rewired')
const rewireLess = require('react-app-rewire-less')

module.exports = function override(config, env) {
  console.log('Load customized theme overides...')
  config = injectBabelPlugin(
    ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }], // change importing css to less
    config,
  )
  config = rewireLess.withLoaderOptions({
    modifyVars: {
    },
    javascriptEnabled: true,
  })(config, env)
  return config
}
