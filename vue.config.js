/*
 * @Author: bujiaotutu 835349858@qq.com
 * @Date: 2022-09-01 16:02:33
 * @LastEditors: bujiaotutu 835349858@qq.com
 * @LastEditTime: 2022-10-14 13:56:43
 * @FilePath: \workpace\resume\vue.config.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    config.module.rule('md')
            .test(/\.md/)
            .use('vue-loader')
            .loader('vue-loader')
            .end()
            .use('vue-markdown-loader')
            .loader('vue-markdown-loader/lib/markdown-compiler')
            .options({
              raw: true
            }) 
}

})
