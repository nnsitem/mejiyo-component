const path = require('path')
const packageInfo = require('./package.json')

module.exports = {
  title: `Version: ${packageInfo.version}`,
  theme: {
    color: {
      codeBackground: '#0C1E37',
      codeBase: 'white',
    },
    fontSize: {
      h1: 36,
    },
    borderRadius: 6,
  },
  // styles: {
  //   Para: {
  //     para: {
  //       fontSize: '13px',
  //     },
  //   },
  // },
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
  require: ['@fortawesome/fontawesome-free/css/all.min.css', './src/style.css', 'normalize.css'],
  ignore: ['**/components/index.js', '**/components/utils/index.js'],
  getComponentPathLine(componentPath) {
    const dir = path.dirname(componentPath)
    const arrDir = dir.split('/')
    const componentName = arrDir[arrDir.length - 1]
    if (componentName === 'components') return ''

    return `import { ${componentName} } from '${packageInfo.name}';`
  },
}
