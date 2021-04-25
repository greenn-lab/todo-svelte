const removeConsoleLogsInProduction = {
  plugins: process.env.NODE_ENV === 'production'
    ? ['transform-remove-console']
    : []
}

module.exports = {
  mount: {
    public: '/',
    src: '/dist'
  },
  plugins: [
    ['@snowpack/plugin-svelte', {
      preprocess: require('svelte-preprocess')({
        scss: {
          prependData: '@import "./src/scss/default.scss";'
        },
        postcss: {
          plugins: [
            require('autoprefixer')()
          ]
        },
        babel: removeConsoleLogsInProduction
      })
    }],
    ['@snowpack/plugin-babel', {
      transformOptions: removeConsoleLogsInProduction
    }],
    '@snowpack/plugin-dotenv',
    '@snowpack/plugin-optimize'
  ],
  alias: {
    '~': './src'
  }
}
