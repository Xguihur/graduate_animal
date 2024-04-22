const { defineConfig } = require('@vue/cli-service')

// 按需引入 element-plus
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

// const path = require('path')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false,
  outputDir: './build',
  // 部署到服务器的时候注释掉下面这一行代码
  publicPath: './',
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ],
    resolve: {
      alias: {
        components: '@/components'
      }
    }
  }
})
