const path = require('path')
const packageInfo = require('./package.json')

module.exports = {
  title: `Version: ${packageInfo.version}`,
  sections: [
    {
      name: 'Installation',
      content: 'docs/installation.md',
    },
    {
      name: 'Components',
      content: 'docs/components.md',
      components: 'src/components/**/index.js',
      exampleMode: 'collapse', // 'hide' | 'collapse' | 'expand'
      usageMode: 'collapse', // 'hide' | 'collapse' | 'expand'
    },
  ],
  webpackConfig: {
    module: {
      rules: [
        // Babel loader will use your project’s babel.config.js
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
      ],
    },
  },
  require: ['normalize.css', './src/style.css'],
  ignore: ['**/components/index.js'],
  getComponentPathLine(componentPath) {
    const dir = path.dirname(componentPath)
    const arrDir = dir.split('/')
    const componentName = arrDir[arrDir.length - 1]
    if (componentName === 'components') return ''

    return `import { ${componentName} } from '${packageInfo.name}';`
  },
}
