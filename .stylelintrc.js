module.exports = {
  root: true,
  plugins: ['stylelint-order', 'stylelint-scss'],
  extends: [
    'stylelint-config-standard',
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
    'stylelint-config-rational-order',
    "stylelint-config-prettier-scss"
  ],

  overrides: [
    {
      files: ['**/*.(scss|css|vue|html)'],
      customSyntax: 'postcss-scss',
    },
    {
      files: ['**/*.(html|vue)'],
      customSyntax: 'postcss-html',
    },
  ],

  /**
   * null  => 关闭该规则
   * always => 必须
   */
  rules: {
    // 在 css 中使用 v-bind，不报错
    'value-keyword-case': null,
    // 禁止空块
    'block-no-empty': true,
    // 禁止在覆盖高特异性选择器之后出现低特异性选择器
    'no-descending-specificity': null,
    // 禁止空源码
    'no-empty-source': null,
    // 禁止字体族中缺少泛型族关键字
    'font-family-no-missing-generic-family-keyword': null,
    // 要求 URL 的引号
    'function-url-quotes': 'always',
    // 不允许未知函数
    'function-no-unknown': [
      true,
      { ignoreFunctions: ["v-bind"] }
    ],
    // 指定类选择器的模式
    'selector-class-pattern': null,
    // 要求或禁止在规则之前的空行
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      }
    ],

    // 色值是否简写
    "color-hex-length": 'long',

    /* 不要使用已被 autoprefixer 支持的浏览器前缀 */
    'media-feature-name-no-vendor-prefix': true,
    'at-rule-no-vendor-prefix': true,
    'selector-no-vendor-prefix': true,
    'property-no-vendor-prefix': true,
    'value-no-vendor-prefix': true,

    /* 识别伪元素 */
    "selector-pseudo-class-no-unknown": [
      true,
      {
        ignorePseudoClasses: ["global", "v-deep", "deep"]
      }
    ],
  }
}
