module.exports = {
  plugins: ['@babel/plugin-transform-optional-chaining'],
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          esmodules: true // 支持 ES 模块
        },
        useBuiltIns: 'usage',
        corejs: 3
      }
    ]
  ]
}
