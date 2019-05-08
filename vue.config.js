module.exports = {
  chainWebpack: (config) => {
    config.module.rule('eslint').use('eslint-loader').options({
      fix: true,
    });
  },

  pwa: {
    name: 'Joao Bairrada Portfolio',
    themeColor: '#4758fc',
    msTileColor: '#4758fc'
  }
};
