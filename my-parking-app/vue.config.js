const { defineConfig } = require('@vue/cli-service')
module.exports = {
  transpileDependencies: []
};

module.exports = {
  configureWebpack: {
    plugins: [
      new (require('webpack')).DefinePlugin({
        __VUE_OPTIONS_API__: JSON.stringify(true),
        __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: JSON.stringify(false),
      })
    ]
  }
};
