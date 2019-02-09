module.exports = {
  // chainWebpack(config) {
  //   config.module.rule('md')
  //     .test(/\.md$/)
  //     .use('markdown-loader')
  //     .loader(['html-loader', 'markdown-loader'])
  // },
  configureWebpack: {
    module: {
      rules: [
        {
          test: /\.md$/,
          use: ['html-loader', 'markdown-loader'],
        },
      ],
    },
  },
  css: {
    loaderOptions: {
      sass: {
        data: '@import "~@/styles/custom-utilities";',
      },
    },
  },
}
