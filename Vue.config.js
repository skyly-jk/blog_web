module.exports = {
    // webpack-dev-server 相关配置
    devServer: { // 设置代理
        hot: true, //热加载
        https: false, //false关闭https，true为开启
        open: true, //自动打开浏览器
        proxy: {
            '/api': { //本地
                target: 'http://localhost:8018',
            },
        }
    },
    pluginOptions: { // 第三方插件配置

    }
}