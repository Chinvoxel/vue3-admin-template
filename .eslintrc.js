module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
    'vue/setup-compiler-macros': true
  },

  // 指定一个解析器
  parser: 'vue-eslint-parser', // 专为解析 Vue 单文件组件而设计的解析器。
  parserOptions: {
    parser: '@babel/eslint-parser',
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  extends: ['eslint:recommended', 'airbnb-base', 'plugin:vue/vue3-recommended', 'plugin:prettier/recommended'],
  plugins: ['html', 'vue', 'vue-scoped-css', 'import'],

  settings: {
    // 解析和定位模块导入语句中的模块路径
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'src'],
        extensions: ['.js', '.json', '.vue', '.jsx', '.ts', '.cjs', '.mjs']
      },
      alias: {
        map: [
          ['@', './src'],
          ['@imgs', './src/assets/images'],
          ['@comps', './src/components']
        ],
        extensions: ['.js', '.json', '.vue', '.jsx', '.ts', '.cjs', '.mjs']
      }
    }
  },

  /**
   * "off" 或 0    ==>  关闭规则
   * "warn" 或 1   ==>  打开的规则作为警告（不影响代码执行）
   * "error" 或 2  ==>  规则作为一个错误（代码不能执行，界面报错）
   */
  rules: {
    /* JS */
    'no-console': 'off', // 打印警告
    'no-use-before-define': 'off', // vue项目允许先定义方法后使用
    'no-restricted-syntax': 'off', // 关闭禁用for-in for-of的规则
    'no-param-reassign': ['error', { props: false }], // 禁止直接赋值函数的入参
    'no-underscore-dangle': 'off', // 关闭不允许下划线做前缀
    'no-unused-expressions': ['error', { allowShortCircuit: true }], // 允许短路逻辑运算符如 && 和 ||
    'prefer-destructuring': 'off', // 对象、数组不强制解构

    /* another */
    'import/prefer-default-export': 'off', // 关闭推荐export default
    'import/no-extraneous-dependencies': ['off', { devDependencies: true }], // 关闭错误提示开发依赖需安装为生产依赖
    'import/no-cycle': 'off', // 循环依赖检测
    //   依赖导入顺序
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', ['parent', 'sibling']]
        // 'newlines-between': 'always' 模块分组是否需要空行
      }
    ],

    // 解决后缀忽略不识别问题
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        json: 'never',
        cjs: 'never',
        vue: 'always',
        sass: 'always'
      }
    ]
  },

  overrides: [
    {
      files: ['*.vue'],
      rules: {
        'vue/no-undef-properties': 'error', // 禁止使用未定义的属性
        'vue/block-tag-newline': 'error', // 在开始和结束块级标记之后和之前强制换行
        'vue/comment-directive': 'off', // 支持在模版中使用 eslint-disable-next-line 等注释
        'vue/no-multiple-template-root': 'off', // 关闭多根节点检测
        'vue/multi-word-component-names': 'off', // 关闭单文件组件名必须多个单词的限制
        'vue/attribute-hyphenation': 'error', // 自定义组件-属性名称-连接符
        'vue/attributes-order': 'off',
        'vue-scoped-css/require-scoped': 'error' // 确保 scoped 样式的正确使用
      }
    }
  ]
}
