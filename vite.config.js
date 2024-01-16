import path from 'path'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import viteCompression from 'vite-plugin-compression2'
import visualizer from 'rollup-plugin-visualizer'
import ViteRestart from 'vite-plugin-restart'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd())

  return defineConfig({
    base: env.VITE_APP_PUBLIC_PATH, // 项目在服务器上的基本路径
    plugins: [
      vue(),
      // 修改这些文件会重启项目
      ViteRestart({
        cache: false,
        restart: ['./vite.config.js', './babel.config.js', './jsconfig.json']
      }),

      VueI18nPlugin({
        include: [path.resolve(__dirname, './src/language/**')]
      }),

      // 压缩
      viteCompression({
        algorithm: 'gzip', // 压缩算法
        threshold: 10240, // 体积大于阈值，则进行压缩，单位为b
        deleteOriginFile: false, // 压缩后是否删除源文件
        exclude: [
          /\.(br)$/, // 排除已经使用 Brotli 压缩的文件
          /\.(gz)$/, // 排除已经使用 Gzip 压缩的文件
          /\.(png|jpe?g|gif|svg|ico)$/i // 排除图片格式文件
        ]
      }),

      // 打包分析
      visualizer({
        open: true, // 构建完成后自动打开报告页面
        gzipSize: true, // 显示 Gzip 压缩后的包大小
        brotliSize: true // 显示 Brotli 压缩后的包大小
      })
    ],

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@imgs': path.resolve(__dirname, 'src/assets/images'),
        '@comps': path.resolve(__dirname, 'src/components')
      },
      extensions: ['.js', '.json', '.vue', '.jsx', '.ts', '.cjs', '.mjs'] // 文件后缀拓展
    },

    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use '${path.resolve(__dirname, 'src/styles/mixin.scss')}' as *;
          @use "${path.resolve(__dirname, 'src/styles/variables.scss')}" as *;
          `
        }
      }
    },

    // 打包
    build: {
      sourcemap: true,
      chunkSizeWarningLimit: 1600, // 触发警告的 chunk 大小
      rollupOptions: {
        external: [], // 指定外部依赖模块

        output: {
          chunkFileNames: 'static/js1/[name]-[hash].js', // 设置输出的 chunk 文件名
          entryFileNames: 'static/js2/[name]-[hash].js', // 设置输出的入口文件名
          assetFileNames: 'static/[ext]/[name]-[hash].[ext]', // 设置输出的资源文件名
          // 分包 减小main.js体积
          manualChunks: filePath => {
            if (filePath.includes('node_modules')) {
              const arr = filePath.toString().split('node_modules/')[1].split('/')
              const pack = ['vue', 'vue-router']
              if (pack.includes(arr[0])) {
                return `_${arr[0]}` // 将指定的包分割为单独的 chunk
              }
              return '__vendor' // 其他第三方包统一打包到一个 chunk
            }
            return '__vendor' // 非第三方包统一打包到一个 chunk
          }
        }
      }
    },

    esbuild: {
      drop: ['debugger']
    },

    // 本地服务
    server: {
      port: 8889, // 端口号
      hmr: true, // 热更新
      proxy: {
        '/api': {
          target: env.VITE_APP_SERVER_API, // 使用环境变量
          changeOrigin: true, // 开启跨域
          rewrite: paths => paths.replace(/^\/api/, '')
        }
      }
    }
  })
}
